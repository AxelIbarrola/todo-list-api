require('dotenv').config()

const Task = require('../models/Task')
const { sequelize } = require('../config/database')

( async () => {
    try{
        await sequelize.sync();
        console.log('✅ Successful synchronized tables.')
    } catch(err) {
        console.error(`❌ Synchronization error with tables: ${err}`)
        process.exit(1)
    } finally {
        await sequelize.close()
        console.log('🔒 Connection closed.')
        process.exit(0)
    }
}
)();
