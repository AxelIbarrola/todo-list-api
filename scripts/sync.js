require('dotenv').config()

// Importamos Task para que sequelize lo registre a la hora de sincronizar
const Task = require('../models/Task')
const { sequelize } = require('../config/database')

( async () => {

    let exitCode = 0;
    try{
        await sequelize.sync();
        console.log('✅ Successful synchronized tables.')
    } catch(err) {
        console.error(`❌ Synchronization error with tables: ${err}`)
        exitCode = 1;
    } finally {
        await sequelize.close()
        console.log('🔒 Connection closed.')
        process.exit(exitCode)
    }
}
)();
