//importo el modelo del formulario de contacto
const Contact = require('../models/Contact');


//Creo un objeto para almacenar las funciones relacionadas con el formulario de contacto
const contactCtrl = {};

//utilizo el metodo getContact, este metodo puedo llamarlo como quiera
contactCtrl.createContact = async (req,res) => {
    const {nombre, email, telefono, asunto, mensaje}= req.body;

    const newContact = new Contact ({
        nombre: nombre,
        email: email,
        telefono: telefono,
        asunto: asunto,
        mensaje: mensaje,
    });
    await newContact.save();
    console.log(newContact);
    res.json ({message: 'Contact saved'})
}


contactCtrl.getContacts = async (req, res) => {
    const contact = await Contact.find();
    res.json(contact);
};


//lo exporto y lo voy a importar en el archivo contact.js
module.exports = contactCtrl;

