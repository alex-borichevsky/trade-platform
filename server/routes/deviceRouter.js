const Router = require('express');
const router = new Router();
const deviceController = require('../controllers/deviceController');
const {debug} = require("nodemon/lib/utils");
const checkRole = require('../middleware/checkRoleMiddleware');

router.post('/', checkRole('ADMIN'), deviceController.create);
router.get('/',  deviceController.getAll),
router.get('/:id', deviceController.getOne)

module.exports = router;