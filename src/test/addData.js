const { Hero } = require('../models/hero');
const fs = require('fs');
const path = require('path');

const rutaJson = path.join(__dirname, '../data/superheroes.json');
const data = fs.readFileSync(rutaJson, 'utf-8');
const superheroes = JSON.parse(data);

const addData = () => {
    superheroes.forEach(async (heroe) => {
        try {
            const { name, real_name, year_appearance, house, biography, equipment, images } = heroe

            console.log('RESULT', name);
            const newHero = new Hero({
                name,
                real_name,
                year_appearance,
                house,
                biography,
                equipment,
                images,
            })

            await newHero.save();

        } catch (error) {
            console.error('Error al insertar héroe en MongoDB:', error);
        }
    });
}

module.exports = {addData}