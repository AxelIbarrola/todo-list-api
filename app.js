const express = require("express");
const app = express();

const taskRoutes = require('./routes/tasks')

require("dotenv").config();
const PORT = process.env.PORT || 3000;

// const {  validationResult } = require("express-validator");
// const { validateTaskId, validateTaskFields, validateUpdateTasks } = require('./middlewares/validators')

app.use(express.json());

app.listen(PORT, () =>
  console.log(`Servidor corriendo en http:localhost:${PORT}`)
);

app.get("/", (req, res) => {
  res.send("¡Bienvenido a mi servidor Express!");
});

app.use('/tasks' ,taskRoutes)

app.use(
  (err, req, res, next) => {
      console.error(err.stack);
      res.status(err.status || 500).json({
          error: err.message || 'Internal Server Error',
          details: err.details || null
      })
  }
)