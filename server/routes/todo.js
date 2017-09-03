const express = require('express');
const router = express.Router();
const todoControl = require('../controllers/todo')

router.get('/', todoControl.getTodo);
router.post('/', todoControl.insertTodo);
router.put('/:id', todoControl.updateTodo);
router.delete('/:id', todoControl.deleteTodo);

module.exports = router;
