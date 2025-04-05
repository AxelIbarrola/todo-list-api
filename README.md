# API To-Do List 📋

Este proyecto es una **API RESTful** para gestionar tareas, construida con fines educativos para profundizar en el uso de **Node.js** y **Express** como backend.

## 🚀 Tecnologías usadas

+ Node.js
+ Express
+ Sequelize
+ PostgreSQL
+ express-validator
+ Postman

## 📂 Estructura del proyecto

  To-Do-List/
│
├── models/           # Modelos Sequelize
├── routes/           # Rutas Express
├── middlewares/      # Validaciones personalizadas
├── scripts/          # Script de sincronización con la base de datos
├── config/           # Configuración de Sequelize
├── .env              # Variables de entorno
└── app.js            # Archivo principal del servidor

---

## 🛠️ Aprendizajes

- ✅ Express.js
- ✅ Sequelize ORM y conexión con PostgreSQL
- ✅ Validaciones con express-validator
- ✅ Manejo de errores con middlewares
- ✅ Testing de endpoints usando Postman
- ✅ Buenas prácticas y modularización

## 📍 Endpoints disponibles

| Método | Ruta           | Acción                          |
|--------|----------------|---------------------------------|
| GET    | /tasks         | Obtener todas las tareas        |
| GET    | /tasks/:id     | Obtener una tarea por ID        |
| POST   | /tasks         | Crear una nueva tarea           |
| PUT    | /tasks/:id     | Actualizar una tarea existente  |
| DELETE | /tasks/:id     | Eliminar una tarea              |

---

## ⚙️ Instalación y uso local

### Requisitos previos

+ Tener instalado [Node.js](https://nodejs.org/es)
+ Tener instalado [PostgreSQL](https://www.postgresql.org/)
+ Utilizar un cliente HTTP (Postman, Insomnia, Thunder Client, etc)


1. **Cloná el repositorio:**

   ```bash
   git clone https://github.com/AxelIbarrola/todo-list-api
   cd todo-list-api
   ```

2. **Instalá las dependencias:**

   ```bash
   npm install
   ```

3. **Configurá las variables de entorno:**

    Crea un archivo `.env` en la raíz del proyecto y crea las variables necesarias para crear la Base de Datos.

    ```ini
    DB_USER=tu_usuario
    DB_PASSWORD=tu_contraseña
    DB_HOST=localhost
    DB_PORT=5432
    DB_NAME=nombre_de_tu_base
    PORT=3000
    ```

4. **Sincronizá la base de datos:**

    ```bash
    node ./scripts/sync.js
    ```

5. **Iniciar el servidor:**

    ```bas
        npm start
    ```

### 🎫 Cómo probar la API

  Una vez que el servidor esté corriendo, podés hacer peticiones HTTP a los endpoints usando cualquier cliente HTTP, como:

+ [Postman](https://www.postman.com/downloads/)

+ [Insomnia](https://insomnia.rest/)

+ [Hoppscotch](https://hoppscotch.io/)

+ [Thunder Client](https://www.thunderclient.com/)

+ o curl desde la terminal

1. Ejemplo de petición **POST** a `/task`

    ```bash
    POST /tasks
    Content-Type: application/json
    ```
    ```json
    {   
    "title": "Aprender Express",
    "description": "Crear una API RESTful con validaciones"
    }

    ```

## 📌 Nota
Este proyecto es exclusivamente backend (no incluye frontend). Fue creado con fines educativos para fortalecer conocimientos sobre cómo construir una API RESTful de manera profesional.

## 💡 Autor

+ Axel Ibarrola
+ GitHub: @AxelIbarrola


