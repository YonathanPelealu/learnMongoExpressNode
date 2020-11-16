const  createUserController  = require ('../controllers/userController');
const { Router } = require ('express');
const router = Router()

router.post('/add', createUserController.createUser)

exports.router = router

