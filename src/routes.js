const express = require('express');

const routes = express.Router();

const IndexController = require('./controllers/IndexController'); 
const CoursesController = require('./controllers/CoursesController');
const InstructorsController = require('./controllers/InstructorsController');
const LessonsController = require('./controllers/LessonsController');

routes.get('/', IndexController.index);

// Rotas de Cursos
routes.post('/courses', CoursesController.create);
routes.get('/courses',CoursesController.find);
routes.get('/courses/:id', CoursesController.findById);
routes.patch('/courses/:id', CoursesController.update);
routes.delete('/courses/:id', CoursesController.delete);

routes.post('/instructors', InstructorsController.create);
routes.get('/instructors', InstructorsController.find);
routes.get('/instructors/:id', InstructorsController.findById);
routes.patch('/instructors/:id', InstructorsController.update);


routes.post('/lessons', LessonsController.create);
routes.get('/lessons', LessonsController.find);
routes.get('/lessons/:id', LessonsController.getById);
routes.patch('/lessons/:id', LessonsController.update);
routes.delete('/lessons/:id', LessonsController.delete);

module.exports = routes;

// lessons
// courses
// instructors