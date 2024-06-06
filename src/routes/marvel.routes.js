const express = require('express');
const { getAllHeroesMarvel } = require('../handlers/heroes.handler');
const router = express.Router();
/**
 * @swagger
 * /superheroes/marvel:
 *   get:
 *     tags: [Marvel]
 *     summary: Obtiene todos los heroes de Marvel
 *     description: Obtener una lista de todos los heroes de Marvel
 *     responses:
 *       200:
 *         description: Lista de heroes de marvel obtenida exitosamente
 *       500:
 *         description: Error del servidor
 */
router.get('/', getAllHeroesMarvel);

module.exports = router;
