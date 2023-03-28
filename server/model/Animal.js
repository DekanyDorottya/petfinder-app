const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const animalShema = new Schema({
    details: Object,
    donate: Number,
});

const Animal = model('Animal', animalShema);

module.exports = Animal;