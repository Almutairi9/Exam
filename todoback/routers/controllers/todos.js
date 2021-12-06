const todoModel = require("../../db/models/todo");
// Done 
const getAllTodo = (req, res) => {
  todoModel
    .find({ isDel: false })
    .select("task timeStamp")
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};
// Done
const getTodoById = (req, res) => {
  const { id } = req.params;
  todoModel
    .findOne({ _id: id, isDel: false })
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};
// Done
const getCompletedTodos = (req, res) => {
  todoModel
    .find({ isDel: false, isCompleted: true })
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};

// Done 
const createTodo = (req, res) => {
  const { task}  = req.body

  const newTodo = new todoModel({
    task,
  });

  newTodo
    .save()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};

// Done 
const completeTodo = (req, res) => {
  const { id } = req.params;
  
  todoModel
    .findOneAndUpdate({ id }, { isCompleted: true }, { new: true })
    .exec()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};
// Done 
const updateTodo = (req, res) => {
  const { id } = req.params;
  const {task} = req.body;

  todoModel
    .findOneAndUpdate({ _id: id }, { task: task }, { new: true })
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};
// Done
const deleteTodo = (req, res) => {
  const { id } = req.params;

  todoModel
    .findOneAndUpdate({ _id: id }, { isDel: true })
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
};

module.exports = {
  getAllTodo,
  getTodoById,
  getCompletedTodos,
  createTodo,
  completeTodo,
  deleteTodo,
  updateTodo,
};
