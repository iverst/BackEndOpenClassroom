const express = require('express');
const auth = require('../middleware/auth');
const stuffController = require('../controllers/stuff');
const router = express.Router();



router.post('/', auth, stuffController.createThing);

router.put('/:id', auth, stuffController.modifyThing);

router.get('/', auth, stuffController.deleteThing);

router.get('/:id', auth, stuffController.getOneThing);

router.delete('/:id', auth, stuffController.getAllThings);


module.exports = router;