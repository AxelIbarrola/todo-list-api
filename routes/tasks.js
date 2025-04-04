const express = require('express');
const router = express.Router()
const { Task } = require('../models/Task')
const { validateTaskId, validateTaskFields, validateUpdateTasks } = require('../middlewares/validators')
const handleValidation = require('../middlewares/handleValidation')

router.route('/')
.get(
  async (req, res, next) => {

    try {
      const tasks = await Task.findAll()

      res.status(200).json(tasks)

    } catch (error) {
      next(error)
    }
  }
)
.post( validateTaskFields,
  handleValidation,

  async (req, res, next) => {

    const { title, description } = req.body

    try {
      const newTask = await Task.create({title,description})

      res.status(201).json({
        message: '✅ Task created successfully',
        newTask})

    } catch (error) {
      next(error)
    }
  
  }
)

router.route('/:id')
.get(
  validateTaskId, 
  handleValidation,

  async (req, res, next) => {

    const { id } = req.params

    try {

      const task = await Task.findByPk(id)

      if (!task) {
        error = new Error('Task not found.')
        error.status = 404;
        return next(error)
    }

    res.status(200).json(task)

  } catch (error) {
    next(error)
  }

  }
)
.put(
  [validateTaskId, validateUpdateTasks],
  handleValidation,

  async (req, res, next) => {

    const { id } = req.params
    const { title, description } = req.body

    try {

      const task = await Task.findByPk(id);

      if (!task) {
        const error = new Error('Task not found')
        error.status = 404
        return next(error)
      }

      if(title) { task.title = title }
      if(description) { task.description = description }

      await task.save()

      res.status(200).json({
        message: 'Task updated successfully.',
        updatedTask: task
      })

    } catch (error) {
      next(error)
    }
  }
)
.delete(
  validateTaskId,
  handleValidation,

  async (req, res, next) => {

    const { id } = req.params
    
    try{

      const task = await Task.findByPk(id)

      if (!task) {
        const error = new Error('Task not found.')
        error.status = 404
        return next(error)
      }

      await task.destroy();

      res.status(200).json({
        message: 'Task deleted successfully.',
        deletedTask: task
      }
      )

    } catch (error) {
      next(error)
    }
  }
)

module.exports = router;