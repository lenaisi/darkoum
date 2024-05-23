import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

const ThreeSixtyViewer = () => {
  const mountRef = useRef(null);
  let scene, camera, renderer, controls;
  let poiObjects = []; // Array to store the points of interest objects

  useEffect(() => {
    // Initialize scene, camera, and renderer
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

    // Load 360 texture
    const textureLoader = new THREE.TextureLoader();
    textureLoader.load(
      '/pipi.jpg', // Provide the correct path to your 360 image
      (texture) => {
        const geometry = new THREE.SphereGeometry(500, 60, 40);
        geometry.scale(-1, 1, 1);

        const material = new THREE.MeshBasicMaterial({ map: texture });
        const sphere = new THREE.Mesh(geometry, material);
        scene.add(sphere);
      },
      undefined,
      (error) => {
        console.error('An error occurred loading the texture:', error);
      }
    );

    // Add points of interest
    const poiPositions = [
      { x: 100, y: 50, z: 200 },
      { x: -150, y: 20, z: 250 },
      { x: 50, y: -100, z: 180 }
    ];

    poiPositions.forEach((poiPos, index) => {
      const poiGeometry = new THREE.SphereGeometry(5, 32, 32);
      const poiMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 }); // Red
      const poi = new THREE.Mesh(poiGeometry, poiMaterial);
      poi.position.set(poiPos.x, poiPos.y, poiPos.z);
      poiObjects.push(poi); // Add the point of interest object to the array
      scene.add(poi);
    });

    const onWindowResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };

    window.addEventListener('resize', onWindowResize, false);

    const onPoiClick = (event) => {
      // Get mouse click position
      const mouse = new THREE.Vector2(
        (event.clientX / window.innerWidth) * 2 - 1,
        -(event.clientY / window.innerHeight) * 2 + 1
      );

      // Raycast to detect intersections with points of interest objects
      const raycaster = new THREE.Raycaster();
      raycaster.setFromCamera(mouse, camera);

      // Find intersected objects
      const intersects = raycaster.intersectObjects(poiObjects);

      // If intersections are found, move the camera to the first point of interest
      if (intersects.length > 0) {
        const targetPosition = intersects[0].object.position;
        controls.target.copy(targetPosition);
        controls.update();
      }
    };

    window.addEventListener('click', onPoiClick, false);

    const rotateCamera = (direction) => {
      const angle = 0.1;
      const offset = new THREE.Vector3();

      // Calculate the offset from the target to the camera
      offset.copy(camera.position).sub(controls.target);

      // Rotate the offset
      if (direction === 'up') {
        offset.applyAxisAngle(new THREE.Vector3(1, 0, 0), angle);
      } else if (direction === 'down') {
        offset.applyAxisAngle(new THREE.Vector3(1, 0, 0), -angle);
      } else if (direction === 'left') {
        offset.applyAxisAngle(new THREE.Vector3(0, 1, 0), angle);
      } else if (direction === 'right') {
        offset.applyAxisAngle(new THREE.Vector3(0, 1, 0), -angle);
      }

      // Set the new camera position
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

    const disableScroll = (event) => {
      event.preventDefault();
    };

    const onMouseEnter = () => {
      document.body.style.overflow = 'hidden';
    };

    const onMouseLeave = () => {
      document.body.style.overflow = 'auto';
    };

    mountRef.current.addEventListener('mouseenter', onMouseEnter);
    mountRef.current.addEventListener('mouseleave', onMouseLeave);

    // Animate the scene
    const animate = () => {
      requestAnimationFrame(animate);
      controls.update();
      renderer.render(scene, camera);
    };

    animate();

    // Cleanup when the component is unmounted
    return () => {
      window.removeEventListener('resize', onWindowResize);
      window.removeEventListener('click', onPoiClick);
      window.removeEventListener('keydown', onKeyDown);
      mountRef.current.removeEventListener('mouseenter', onMouseEnter);
      mountRef.current.removeEventListener('mouseleave', onMouseLeave);
      mountRef.current.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} style={{ width: '100vw', height: '100vh' }} />;
};

export default ThreeSixtyViewer;
