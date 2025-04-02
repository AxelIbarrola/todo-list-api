const express = require('express');
const app = express();
require('dotenv').config()
const PORT = process.env.PORT() || 3000;

app.listen(PORT,
    () => console.log(`Servidor corriento en http:localhost:${PORT}`)
)

