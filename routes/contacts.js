const express = require("express");
const router = express.Router();
const contactController = require("../controllers/Contacts");

router.post("/add", contactController.create);
router.get("/all", contactController.findAll);
router.get("/id/:id", contactController.findById);
router.put("/id/:id", contactController.update);
router.delete("/id/:id", contactController.delete);
// router.get("/", (req, res) => {
//   res.send("Router ini");
// });

module.exports = router;
