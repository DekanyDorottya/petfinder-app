const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const animalShema = new Schema({
    details: Object,
    donate: Number,
});

const NewAnimal = model('NewAnimal', animalShema);

module.exports = NewAnimal;