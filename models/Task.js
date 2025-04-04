const { DataTypes } = require('sequelize')
const { sequelize } = require('../config/database')

const Task = sequelize.define('Task', {

        title: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: {
                    args: [5, 100],
                    msg: 'The title must have between 5 and 100 characters'
            }
            }
        },

        description: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                len: {
                    args: [10, 1000],
                    msg: 'The description must have between 10 and 1000 characters'
                }
            }
        }
    },

    {
        tableName: 'tasks',
        timestamps: true
    }
)

module.exports = { Task }

