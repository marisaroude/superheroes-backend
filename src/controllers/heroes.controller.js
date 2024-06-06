const { Hero } = require("../models/hero");

const getAllHeroesCtrl = async () => {
  try {
    const heroes = await Hero.find();
    return heroes;
  } catch (error) {
    throw new Error({ message : 'Error retrieving hero data:' + error.message});
    ;
  }
};

const getAllHeroesMarvelCtrl = async () => {
  try {
    const heroes = await Hero.find({ house: 'Marvel' });
    return heroes;
  } catch (error) {
    throw new Error({ message : 'Error retrieving hero Marvel data:' + error.message});
    ;
  }
};

const getAllHeroesDCCtrl = async () => {
  try {
    const heroes = await Hero.find({ house: 'DC' });
    return heroes;
  } catch (error) {
    throw new Error({ message : 'Error retrieving hero Marvel data:' + error.message});
    ;
  }
};


const createAllHeroesCtrl = async (superheroes) => {
  try {
    const heroPromises = superheroes.map(async (hero) => {
      const { name, real_name, year_appearance, house, biography, equipment, images } = hero;

      if (!images || images.length === 0) {
        throw new Error('A hero must have at least one image.');
      }

      console.log('RESULT', name);
      const newHero = new Hero({
        name,
        real_name,
        year_appearance,
        house,
        biography,
        equipment,
        images,
      });

      await newHero.save();
    });

    await Promise.all(heroPromises);

    return { message: "Heroes created successfully", superheroes };
  } catch (error) {
    console.error('Error inserting heroes:', error);
    throw new Error("Error inserting heroes: " + error.message);
  }
};

const createHeroCtrl = async (heroData) => {
  try {
    const {
      name, 
      real_name, 
      year_appearance, 
      house, 
      biography, 
      equipment,
      images,
    } = heroData;

    if (!images || images.length === 0) {
      throw new Error('A hero must have at least one image.');
    }

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
    return newHero
  } catch (error) {
    throw new Error("Error insert hero: " + error.message);
  }
}

const updateHeroCtrl = async (id, updatedFields) => {
  try {
    console.log('ID', id);
    console.log('FIELD',updatedFields )
    const hero = await Hero.findByIdAndUpdate(id, updatedFields, { new: true });

    if (!hero) {
      throw new Error("Hero not found");
    }

    return { message: "Hero updated successfully", hero };
  } catch (error) {
    console.error('Error updating hero:', error);
    throw new Error("Error updating hero: " + error.message);
  }
};

const deleteHeroCtrl = async (id) => {
  try {
    const hero = await Hero.findByIdAndDelete(id);

    if (!hero) {
      throw new Error("Hero not found");
    }

    return { message: "Hero deleted successfully", hero };
  } catch (error) {
    console.error('Error deleting hero:', error);
    throw new Error("Error deleting hero: " + error.message);
  }
};




module.exports = {
  getAllHeroesCtrl,
  getAllHeroesMarvelCtrl,
  getAllHeroesDCCtrl,
  createAllHeroesCtrl,
  createHeroCtrl,
  updateHeroCtrl,
  deleteHeroCtrl,
}