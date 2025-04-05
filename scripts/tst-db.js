const sequelize = require('../config/database')

( async () => {
    try{
        await sequelize.authenticate();
        console.log('✅ Connection has been established successfully.')
    }catch (error) {
        console.error(`❌ Connection error with the database: ${error}`);
    }
}

)();