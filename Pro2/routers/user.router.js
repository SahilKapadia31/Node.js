const { Router } = require('express');
const { home, create, update, deleteData } = require('../controllers/user.controller');
const userAuth = require('../middleware/user.auth');

const router = Router();

router.get('/', home);
router.post('/create', userAuth, create);
router.patch('/update/:id', update);
router.delete('/delete/:id', deleteData);

module.exports = router