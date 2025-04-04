require('dotenv').config()

const Task = require('../models/Task')
const { sequelize } = require('../config/database')

sequelize.sync()
.then(() => {
    console.log('✅ Successful synchronized tables.')
    return sequelize.close()

})
.then(
    () => {
        console.log('✅ Closed connection successfully.')
        process.exit(0)
    }
)
.catch( err => {
    console.error(`❌ Synchronization error with tables: ${err}`)
    process.exit(1)
})