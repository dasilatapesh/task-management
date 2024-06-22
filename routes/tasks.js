//same instance of express as in index in main
const express = require('express');
const router = express.Router();

//importing the controller
const crudTasks = require('../controllers/crudTasks');

//get route
router.get('/getAll',crudTasks.getTasks);

//post route
router.post('/create',crudTasks.create);

//update route
router.put('/:id',crudTasks.updateTask);

//delete route
router.delete('/:id',crudTasks.deleteTask);

//get Single task
router.get('/:id',crudTasks.getSingleTask);

module.exports = router;