const { validationResult } = require('express-validator')

const handleValidation = (req, res, next) => {
    const errors = validationResult(req)

    if (!errors.isEmpty()) {
        const error = new Error('Validation failed')
        error.status = 400
        error.details = errors.array()

        return next(error)
    }

    next()
}

module.exports = handleValidation;