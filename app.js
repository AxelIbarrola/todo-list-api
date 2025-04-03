const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 3000;

const {  validationResult } = require("express-validator");
const { validateTaskId, validateTaskFields, validateUpdateTasks } = require('./middlewares/validators')

app.use(express.json());

let tasks = [];

app.listen(PORT, () =>
  console.log(`Servidor corriendo en http:localhost:${PORT}`)
);

app.get("/", (req, res) => {
  res.send("¡Bienvenido a mi servidor Express!");
});

app.get("/user/:username", (req, res) => {
  const username = req.params.username;
  res.send(`Bienvenido de nuevo ${username}`);
});

app.get("/search", (req, res) => {
  const query = req.query.q;
  if (!query) {
    return res.send("Debes ingresar un término de búsqueda");
  }

  res.send(`Resultado de búsqueda para: ${query}`);
});


app.route("/tasks")
  .get((req, res) => {
    res.status(200).json(tasks);
  })
  .post(
    validateTaskFields,
    (req, res, next) => {
      const errors = validationResult(req);

      if (!errors.isEmpty()) {
        const error = new Error('Validation failed')
        error.status = 400
        error.details = errors.array()
        return next(error)
    }

      const { title, description } = req.body;

      const newTask = {
        id: Date.now(),
        title,
        description,
      };

      tasks.push(newTask);
      res.status(201).json(newTask); // 201 means that the resource was created correctly
    }
  );

app
  .route("/tasks/:id")
  .get( validateTaskId,
    (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
        const error = new Error('Validation failed.')
        error.status = 400
        error.details = errors.array()
        return next(error)
    }

    const taskId = Number(req.params.id);
    const task = tasks.find((task) => task.id === taskId);

    if (!task) {
      const error = new Error('Task not found.')
        error.status = 404
        return next(error)
      
    }

    res.json(task);
  })
  .put([validateTaskId, validateUpdateTasks],
    (req, res, next) => {

    const errors =  validationResult(req)

    if (!errors.isEmpty()) {
        const error = new Error('Validation failed')
        error.status = 400
        error.details = errors.array()
        return next(error)
    }

    const taskId = Number(req.params.id);
    const taskIndex = tasks.findIndex((task) => task.id === taskId);

    if (taskIndex === -1) {
      const error = new Error('Task not found')
      error.status = 404
      return next(error)
    }

    const { title, description } = req.body;

    if (title) tasks[taskIndex].title = title;
    if (description) tasks[taskIndex].description = description;

    res.json(tasks[taskIndex]);
  })
  .delete( 
    validateTaskId
    , (req, res, next) => {

    const errors = validationResult(req);
    
    if (!errors.isEmpty()) {
        const error = new Error('Validation failed')
        error.status = 400
        error.details = errors.array()
        return next(error)
    }


    const taskId = Number(req.params.id);
    const taskIndex = tasks.findIndex((task) => task.id === taskId);

    if (taskIndex === -1) {
      const error = new Error('Task not found.')
      error.status = 404
      return next(error);
    }

    tasks.splice(taskIndex, 1);
    res.status(200).json({ message: "Task deleted successfully" });
  });

  app.use(
    (err, req, res, next) => {
        console.error(err.stack);
        res.status(err.status || 500).json({
            error: err.message || 'Internal Server Error',
            details: err.details || null
        })
    }
  )
