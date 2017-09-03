const models = require('../models/todo.js')
const user = require('../models/user.js')


var getTodo = (req, res) => {
  models.find({})
  .then(result => {
    res.send(result)
  })
  .catch(err => {
    res.send(err)
  })
}

var insertTodo = (req, res) => {
  models.create({
    task: req.body.task,
    status: 'uncompleted',
    createdAt: new Date(),
    user_id: user._id
  })
  .then(result => {
    res.send(result)
  })
  .catch(err => {
    res.send(err)
  })
}


var updateTodo = (req, res) => {
  models.update({
    _id: req.params.id
  }, {
    task: req.body.task,
    status: req.body.status
  })
  .then(result => {
    res.send(result)
  })
  .catch(err => {
    res.send(err)
  })
}

var deleteTodo = (req, res) => {
  models.deleteOne({
    _id: req.params.id
  })
  .then(result => {
    res.send(result)
  })
  .catch(err => {
    res.send(err)
  })
}

module.exports = {
  getTodo,
  insertTodo,
  updateTodo,
  deleteTodo
};
