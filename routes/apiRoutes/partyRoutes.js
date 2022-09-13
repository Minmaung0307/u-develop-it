const express = require("express");
const router = express.Router();
const db = require("../../db/connection");

// Get all parties
router.get("/parties", (req, res) => {
  // internal logic remains the same
});

// Get single party
router.get("/party/:id", (req, res) => {});

// Delete a party
router.delete("/party/:id", (req, res) => {});

module.exports = router;
