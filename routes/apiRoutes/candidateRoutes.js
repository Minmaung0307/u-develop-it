const express = require("express");
const router = express.Router();
const db = require("../../db/connection");
const inputCheck = require("../../utils/inputCheck");

// originally app.get('/api/candidates')
router.get("/candidates", (req, res) => {
  // internal logic remains the same
});

// originally app.get('/api/candidate/:id')
router.get("/candidate/:id", (req, res) => {});

// originally app.post('/api/candidate')
router.post("/candidate", ({ body }, res) => {});

// originally app.put('/api/candidate/:id')
router.put("/candidate/:id", (req, res) => {});

// originally app.delete('/api/candidate/:id')
router.delete("/candidate/:id", (req, res) => {});

module.exports = router;
