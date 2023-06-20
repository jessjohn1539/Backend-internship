// routes/nudgeRoutes.js

const express = require('express');
const nudgeController = require('../controllers/nudgeController');

const router = express.Router();

router.post('/nudges', nudgeController.createNudge);
router.get('/nudges/:nudgeId', nudgeController.getNudge);
router.put('/nudges/:nudgeId', nudgeController.updateNudge);
router.delete('/nudges/:nudgeId', nudgeController.deleteNudge);

module.exports = router;
