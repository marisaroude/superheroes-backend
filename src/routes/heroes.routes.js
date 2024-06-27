const express = require('express');
const { getAllHeroes, createHero, updateHero, deleteHero, getAllHeroesMarvel, getAllHeroesDC, getHeroById } = require('../handlers/heroes.handler');
const router = express.Router();

/**
 * @swagger
 * /superheroes/heroes:
 *   get:
 *     tags: [Superheroes]
 *     summary: Obtiene todos los heroes
 *     description: Obtener una lista de todos los heroes
 *     responses:
 *       200:
 *         description: Lista de heroes obtenida exitosamente
 *       500:
 *         description: Error del servidor
 */
router.get('/', getAllHeroes);

/**
 * @swagger
 * /superheroes/heroes/{id}:
 *   get:
 *     tags: [Superheroes]
 *     summary: Obtiene todos los heroes
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del superheroe
 *     description: Obtener datos de un superheroe específico
 *     responses:
 *       200:
 *         description: Lista de heroes obtenida exitosamente
 *       500:
 *         description: Error del servidor
 */
router.get('/:id', getHeroById);


/**
 * @swagger
 * /superheroes/heroes:
 *   post:
 *     summary: Crea un nuevo super héroe
 *     tags: [Superheroes]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               real_name:
 *                 type: string
 *               year_appearance:
 *                 type: number
 *               house:
 *                 type: string
 *               biography:
 *                 type: string
 *               equipment:
 *                 type: string
 *               images:
 *                 type: array
 *                 items:
 *                     type: string
 *     responses:
 *       201:
 *         description: Superhéroe creado exitosamente
 *       400:
 *         description: Datos de entrada inválidos
 *       500:
 *         description: Error en el servidor
 */
router.post("/", createHero);

/**
 * @swagger
 * /superheroes/heroes/{id}:
 *   put:
 *     summary: Actualiza un super héroe
 *     tags: [Superheroes]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del superhéroe
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               real_name:
 *                 type: string
 *               year_appearance:
 *                 type: number
 *               house:
 *                 type: string
 *               biography:
 *                 type: string
 *               equipment:
 *                 type: string
 *               images:
 *                 type: array
 *                 items:
 *                    type: string
 *     responses:
 *       200:
 *         description: Superhéroe actualizado exitosamente
 *       400:
 *         description: Datos de entrada inválidos
 *       404:
 *         description: Superhéroe no encontrado
 *       500:
 *         description: Error en el servidor
 */
router.put('/:id', updateHero);
/**
 * @swagger
 * /superheroes/heroes/{id}:
 *   delete:
 *     summary: Elimina un superhéroe
 *     tags: [Superheroes]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID del superhéroe
 *     responses:
 *       200:
 *         description: Superhéroes eliminado exitosamente
 *       404:
 *         description: Superhéroes no encontrado
 *       500:
 *         description: Error en el servidor
 */
router.delete("/:id", deleteHero);


module.exports = router;
