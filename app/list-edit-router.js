const express = require('express');
const listEditRouter = express.Router();


listEditRouter.post('/crear', (req, res) => {

  res.send('Tarea creada');
});


listEditRouter.delete('/eliminar/:id', (req, res) => {
  const taskId = req.params.id;

  res.send(`Tarea eliminada con ID ${taskId}`);
});


listEditRouter.put('/actualizar/:id', (req, res) => {
  const taskId = req.params.id;

  res.send(`Tarea actualizada con ID ${taskId}`);
});

module.exports = listEditRouter;