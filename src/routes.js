const { Router } = require("express");
const userController = require("./controller/userController");
const hoursController = require("./controller/hoursController");

const routes = Router();

routes.get('/', (req, res) => {

    return res.json({ message: 'Hello World', mongo: process.env.MONGODB_URI });
});

routes.post('/login', userController.login);

routes.post('/users/new', userController.post);
routes.put('/users/edit/:id', userController.put);
routes.get('/users/:id', userController.get);
routes.get('/users/:id/exercises', userController.getExercisesbyUserId);
routes.get('/users/:id/exercises/:exercise_id', userController.getExercisebyExerciseId);
routes.get('/users/:id/finish-exercises/', userController.finishExercises);
routes.post('/users/:id/generate-exercises/', userController.putExercises);

routes.post('/hours', hoursController.generateHoursbyConfig);
routes.post('/exercises', hoursController.generateExercises);
routes.get('/cheats/:type', hoursController.getCheats);
routes.get('/term', hoursController.getTerm);
routes.get('/information', hoursController.getInformation);
routes.get('/sentences', hoursController.getSentence);


module.exports = routes;