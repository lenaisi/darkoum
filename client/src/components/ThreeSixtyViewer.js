import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Importer FontAwesome CSS
import { gsap } from 'gsap'; // Importer GSAP

const ThreeSixtyViewer = () => {
  const mountRef = useRef(null);
  let scene, camera, renderer, controls;
  let poiObjects = []; // pour stocker les points d'intérêt

  useEffect(() => {
    // Initialiser la scène, la caméra et le rendu
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    camera.position.set(0, 0, 0.1);

    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    mountRef.current.appendChild(renderer.domElement);

    controls = new OrbitControls(camera, renderer.domElement);
    controls.enableZoom = false;
    controls.enablePan = false;

    // Charger la texture 360
    const textureLoader = new THREE.TextureLoader();
    textureLoader.load(
      '/pipi.jpg', // Fournir le chemin correct vers votre image 360
      (texture) => {
        const geometry = new THREE.SphereGeometry(500, 60, 40);
        geometry.scale(-1, 1, 1);

        const material = new THREE.MeshBasicMaterial({ map: texture });
        const sphere = new THREE.Mesh(geometry, material);
        scene.add(sphere);
      },
      undefined,
      (error) => {
        console.error('Une erreur est survenue lors du chargement de la texture :', error);
      }
    );

    // Ajouter les points d'intérêt
    const poiPositions = [
      { x: 100, y: 50, z: 200 },
      { x: -150, y: 20, z: 250 },
      { x: 50, y: -100, z: 180 }
    ];

    poiPositions.forEach((poiPos) => {
      const poiGeometry = new THREE.SphereGeometry(5, 32, 32);
      const poiMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 }); // Rouge
      const poi = new THREE.Mesh(poiGeometry, poiMaterial);
      poi.position.set(poiPos.x, poiPos.y, poiPos.z);
      poi.visible = true; // Assurez-vous que le POI est visible au départ
      poiObjects.push(poi); // Ajouter l'objet du point d'intérêt au tableau
      scene.add(poi);
    });

    const onWindowResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', onWindowResize, false);

    const onPoiClick = (event) => {
      // Réinitialiser l'orientation de la caméra
      controls.target.set(0, 0, 0);
      camera.lookAt(0, 0, -1);
    
      // Obtenir la position du clic de la souris par rapport au canvas
      const rect = renderer.domElement.getBoundingClientRect();
      const mouse = new THREE.Vector2(
        ((event.clientX - rect.left) / rect.width) * 2 - 1,
        -((event.clientY - rect.top) / rect.height) * 2 + 1
      );
    
      // Utiliser le Raycaster pour détecter les intersections avec les POIs
      const raycaster = new THREE.Raycaster();
      raycaster.setFromCamera(mouse, camera);
    
      // Trouver les objets intersectés
      const intersects = raycaster.intersectObjects(poiObjects);
    
      // Si des intersections sont trouvées, animer la caméra vers le premier POI
      if (intersects.length > 0) {
        const targetPoi = intersects[0].object;
        const targetPosition = targetPoi.position.clone();
        targetPoi.visible = false; // Rendre le POI invisible
    
        gsap.to(camera.position, {
          duration: 2,
          x: targetPosition.x,
          y: targetPosition.y,
          z: targetPosition.z - 10, // Ajuster cette valeur pour contrôler la distance du POI
          onUpdate: () => {
            controls.update();
          }
        });
        gsap.to(controls.target, {
          duration: 2,
          x: targetPosition.x,
          y: targetPosition.y,
          z: targetPosition.z,
          onUpdate: () => {
            controls.update();
          }
        });
      }
    };

    mountRef.current.addEventListener('click', onPoiClick, false);

    const rotateCamera = (direction) => {
      const angle = 0.1;
      const offset = new THREE.Vector3();

      // Calculer le décalage de la cible vers la caméra
      offset.copy(camera.position).sub(controls.target);

      // Faire pivoter le décalage
      if (direction === 'up') {
        offset.applyAxisAngle(new THREE.Vector3(1, 0, 0), angle);
      } else if (direction === 'down') {
        offset.applyAxisAngle(new THREE.Vector3(1, 0, 0), -angle);
      } else if (direction === 'left') {
        offset.applyAxisAngle(new THREE.Vector3(0, 1, 0), angle);
      } else if (direction === 'right') {
        offset.applyAxisAngle(new THREE.Vector3(0, 1, 0), -angle);
      }

      // Définir la nouvelle position de la caméra
      camera.position.copy(controls.target).add(offset);
      camera.lookAt(controls.target);
      controls.update();
    };

    const onKeyDown = (event) => {
      switch (event.key) {
        case 'ArrowUp':
          rotateCamera('up');
          break;
        case 'ArrowDown':
          rotateCamera('down');
          break;
        case 'ArrowLeft':
          rotateCamera('left');
          break;
        case 'ArrowRight':
          rotateCamera('right');
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', onKeyDown, false);

    const onMouseEnter = () => {
      document.body.style.overflow = 'hidden';
    };

    const onMouseLeave = () => {
      document.body.style.overflow = 'auto';
    };

    mountRef.current.addEventListener('mouseenter', onMouseEnter);
    mountRef.current.addEventListener('mouseleave', onMouseLeave);

    // Animer la scène
    const animate = () => {
      requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    };

    animate();

    // Nettoyer lors du démontage du composant
    return () => {
      window.removeEventListener('resize', onWindowResize);
      mountRef.current.removeEventListener('click', onPoiClick);
      window.removeEventListener('keydown', onKeyDown);
      mountRef.current.removeEventListener('mouseenter', onMouseEnter);
      mountRef.current.removeEventListener('mouseleave', onMouseLeave);
      mountRef.current.removeChild(renderer.domElement);
    };
  }, []);

  // Fonction pour basculer en mode plein écran
  const toggleFullScreen = () => {
    if (!document.fullscreenElement) {
      mountRef.current.requestFullscreen().catch((err) => {
        alert(`Erreur lors de la tentative de passer en mode plein écran : ${err.message} (${err.name})`);
      });
    } else {
      document.exitFullscreen();
    }
  };

  return (
    <div ref={mountRef} style={{ position: 'relative', width: '100vw', height: '100vh' }}>
      <button
        onClick={toggleFullScreen}
        style={{
          position: 'absolute',
          top: '10px',
          right: '10px',
          zIndex: 1,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          padding: '10px',
          cursor: 'pointer'
        }}
      >
        <i className="fas fa-expand"></i>
      </button>
    </div>
  );
};

export default ThreeSixtyViewer;
