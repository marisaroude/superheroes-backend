const { getAllHeroesCtrl, createHeroCtrl, updateHeroCtrl, deleteHeroCtrl, createAllHeroesCtrl, getAllHeroesMarvelCtrl, getAllHeroesDCCtrl, getHeroByIdCtrl } = require('../controllers/heroes.controller');

const getAllHeroes = async (req, res) => {
    try {
        const heroes = await getAllHeroesCtrl();
        res.json(heroes);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getHeroById = async (req,res) => {
    try {
        const { id } = req.params
        const hero = await getHeroByIdCtrl(id);
        res.json(hero);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
const getAllHeroesMarvel = async (req, res) => {
    try {
        const heroes = await getAllHeroesMarvelCtrl();
        res.json(heroes);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
const getAllHeroesDC = async (req, res) => {
    try {
        const heroes = await getAllHeroesDCCtrl();
        res.json(heroes);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
const createAllHeroes = async (req, res) => {
    try {
        const superheroes = req.body;
        const result = await createAllHeroesCtrl(superheroes);
        res.status(201).json(result);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const createHero = async (req,res) =>{
    try {
        console.log('REQ.BODY', req.body)
        const result = await createHeroCtrl(req.body);
        res.status(201).json(result);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const updateHero = async (req,res) => {
    try {
        const {id} = req.params;
        console.log('req.body', req.body)
        const result = await updateHeroCtrl(id, req.body)
        res.json(result);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const deleteHero = async (req,res) => {
    try {
        const { id } = req.params;
      const result = await deleteHeroCtrl(id);
      res.json(result);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}


module.exports = {
    getAllHeroes,
    getAllHeroesMarvel,
    getAllHeroesDC,
    createAllHeroes,
    createHero,
    updateHero,
    deleteHero,
    getHeroById
}
