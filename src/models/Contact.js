const {Schema, model} = require('mongoose');

const contactSchema = new Schema({
    nombre: { 
        type: String,
        required: true,
        trim: true,
    },        
    email: { 
        type: String,
        required: true,
        trim: true,
    },   
    telefono: { 
        type: String,
        required: true,
        trim: true,
    },
    asunto: { 
        type: String,
        required: true,
    },
    mensaje: { 
        type: String,
        required: true,
    },
    
    date: {
        type: Date,
        default: Date.now
    }
}, {
    timestamp: true,
});

module.exports = model('Contact', contactSchema);