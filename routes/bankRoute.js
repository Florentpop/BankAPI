const express = require("express");
const router = express.Router();

const {
  handleDeleteBank,
  handleGetBank,
  handlePostBank,
  handleUpdateBank,
} = require("../controllers/bankController");

router.get("/bank", handleGetBank);
router.post("/bank", handlePostBank);
router.put("/bank", handleUpdateBank);
router.delete("/bank", handleDeleteBank);

module.exports = router;
