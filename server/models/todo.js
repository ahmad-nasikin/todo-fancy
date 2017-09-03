var mongoose = require('mongoose')
var Schema = mongoose.Schema

var todoSchema = new Schema({
  task: {type: String, require: true},
  status: {type: String, require:true},
  createdAt: Date
})

var todo = mongoose.model('Todo', todoSchema)

module.exports = todo;
