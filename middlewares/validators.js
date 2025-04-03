const { param, body } = require('express-validator')

const validateTaskId = param('id').toInt().isInt().withMessage('Task ID must be a valid number.')
const validateTaskFields = [
    body('title').notEmpty().withMessage('Title is required.'),
    body('description').notEmpty().isLength({ min: 10}).withMessage('Description is required.')

]
const validateUpdateTasks = [
    body('title').optional().isLength({ min: 5}).withMessage('Title must be at least 5 characters long.'),
    body('description').optional().isLength({ min: 10}).withMessage('Description must be at least 10 characters long.is required.')
]

module.exports = { validateTaskId, validateTaskFields, validateUpdateTasks }