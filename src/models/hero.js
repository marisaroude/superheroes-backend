const mongoose = require('mongoose');

const heroSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    real_name: String,
    year_appearance: {
        type: Number,
        required: true,
    },
    house: {
        type: String,
        required: true,
    },
    biography: String,
    equipment: String,
    images: {
        type: [String],
        validate: {
            validator: function(arr) {
                return arr.length > 0;
            },
            message: 'A hero must have at least one image.'
        }
    }
});

const Hero = mongoose.model('Hero', heroSchema);

module.exports = { Hero };
