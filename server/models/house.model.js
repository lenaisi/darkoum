const mongoose = require('mongoose');
const adminSchema = require('./admin.model');

const houseSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
    },
    description: {
        type: String,
        required: true,
    },
    typeAnnonce: {
        type: String,
        required: true,
    },
    typeBien: {
        type: String,
        required: true,
    },
    wilaya: {
        type: String,
        required: true,
    },
    priceMin: {
        type: Number,
        required: true,
    },
    priceMax: {
        type: Number,
        required: true,
    },
    images: [{
        type: String,
    }],
    createdAt: {
        type: Date,
        default: Date.now,
    },
    admin: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Admin',
       
    }
});

const House = mongoose.model('House', houseSchema);

module.exports = House;
