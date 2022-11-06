const Router = require('express').Router;
const userController = require('../controllers/user-controller');
const groupController = require('../controllers/group-controller');
const router = new Router();
const {body} = require('express-validator');
const authMiddleware = require('../middlewares/auth-middleware');

//auth routes -> '/'
router.post('/registration',
    body('email').isEmail(),
    body('password').isLength({min: 3, max: 32}),
    userController.registration);
router.post('/login', userController.login);
router.post('/logout', userController.logout);
router.get('/activate/:link', userController.activate);
router.get('/refresh', userController.refresh);
router.get('/users', authMiddleware, userController.getUsers);
router.post('/user/edit/username', authMiddleware, userController.changeName)

//group routes -> '/group'
router.post('/group/create', authMiddleware, groupController.create);
router.post('/group/delete', authMiddleware, groupController.delete);
router.post('/group/removeUser', authMiddleware, groupController.removeUser);
router.get('/group/groups', authMiddleware, groupController.getGroups);
router.get('/group/userGroups', authMiddleware, groupController.getUserGroups);

//group invites -> '/group/invite'
router.post('/group/invite/send', authMiddleware, groupController.sendInvite);
router.post('/group/invite/accept', authMiddleware, groupController.acceptInvite);

module.exports = router;