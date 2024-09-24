const express = require('express')

const userController = require('./controller/usersController')
const { rateLimiter, nonAuthenticatedRateLimiter } = require('./middleware/rateLimiter')
const route = express.Router();

route.get('/getUsersList', nonAuthenticatedRateLimiter, userController.fetchUsers)
route.post('/updateUsersList', nonAuthenticatedRateLimiter, userController.updateUsersList)

module.exports = route