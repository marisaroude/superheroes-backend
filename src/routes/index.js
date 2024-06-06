const express = require("express");
const router = express.Router();
const heroRoutes = require("./heroes.routes");
const marvelRoutes = require("./marvel.routes")
const dcRoutes = require("./dc.routes")


router.use("/heroes", heroRoutes);
router.use("/marvel", marvelRoutes);
router.use("/dc", dcRoutes);

module.exports = router;
