const { Router } = require("express");
const { registerUser } = require("../controllers/login");
const { getAllUser, getUserById, updateUserProfile, deletedUser, getInactiveUsers, getInactiveUser } = require('../controllers/users.controllers')
const { getCountries } = require('../controllers/countries.controller')
const { registerProvider } = require('../controllers/providers.controllers')
const usersRouter = Router();

usersRouter.post('/user/create', registerUser)
usersRouter.get('/users', getAllUser)
usersRouter.get('/user/:id', getUserById)
usersRouter.put('/user/:id', updateUserProfile)
usersRouter.post('/user/provider/create/:userId', registerProvider)
usersRouter.get('/users/inactive', getInactiveUsers) // obtener info de todos los usuarios eliminados    
usersRouter.get('/user/inactive/:id', getInactiveUser ) // obtener info de un usuario eliminado en particular
usersRouter.get('/user/setInactivityUser/:id', deletedUser )  // inhabilitar(borrado logico) el usuario mediante id
usersRouter.get('/user/allCountries', getCountries )
module.exports = usersRouter;

