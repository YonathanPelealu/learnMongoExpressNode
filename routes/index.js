const  createUserController  = require ('../controllers/userController');
const { Router } = require ('express');
const router = Router()

const ipDetect = require('../middlewares/detectIp')

router.get('/ipLookup',ipDetect.ipMiddleware,createUserController.getIp)
router.post('/add',createUserController.createUser)


exports.router = router

