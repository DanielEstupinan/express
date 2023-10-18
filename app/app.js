const express = require('express');
const app = express();
const port = 3000;

const listEditRouter = require("./list-edit-router");
const listViewRouter = require("./list-view-router");

const tareas = [
  {
    id: '358645',
    isCompleted: false,
    description: 'Walk the dog'
  },
  {
    id: '789012',
    isCompleted: true,
    description: 'Buy groceries'
  },
  {
    id: '865321',
    isCompleted: false,
    description: 'Read a book'
  }
];

app.get('/tareas', (req, res) => {
  res.json(tareas);
});

app.use("/list-edit-router", listEditRouter);
app.use("/list-view-router", listViewRouter);

app.listen(port, () => {
  console.log(`Servidor en ejecución en el puerto ${port}`);
});