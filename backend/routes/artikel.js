const express = require("express");
const router = express.Router();
const artikelController = require("../controllers/artikelController");

router.get("/artikel", artikelController.getAllArtikel);
router.put("/:id", artikelController.editArtikel);
router.delete("/:id", artikelController.deleteArtikel);
router.post("/artikel", artikelController.addArtikel);

module.exports = router;
