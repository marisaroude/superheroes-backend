const express = require('express');
const { getAllHeroesDC } = require("../handlers/heroes.handler");
const router = express.Router();

/**
 * @swagger
 * /superheroes/dc:
 *   get:
 *     tags: [DC]
 *     summary: Obtiene todos los heroes de DC
 *     description: Obtener una lista de todos los heroes de DC
 *     responses:
 *       200:
 *         description: Lista de heroes de DC obtenida exitosamente
 *       500:
 *         description: Error del servidor
 */
router.get('/', getAllHeroesDC);

module.exports = router;
