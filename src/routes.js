const express = require('express')

const Routes = express.Router()

const TaskController = require('./controller/TaskController')

Routes.get('/',TaskController.index)
Routes.post('/tasks', TaskController.store)

module.exports = Routes