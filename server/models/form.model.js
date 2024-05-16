const mongoose = require('mongoose');


const FormSchema = new mongoose.Schema({
    typeAnnonce: {
        type: String,
        

      
    },
    typeBien: {
        type: String,
      
       
    },
    wilaya: {
        type: String,
       
      
    },
    priceMin: {
        type: Number,
        
    },
    priceMax: {
        type: Number,
        
      
    },
   
});


const FormModel = mongoose.model('Form', FormSchema);

module.exports = FormModel;
