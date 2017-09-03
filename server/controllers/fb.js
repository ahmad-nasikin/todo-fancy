const models = require('../models/user')
const FB = require('fb');
const fb = new FB.Facebook({version: 'v2.8'})

var login = (req, res) => {
  FB.api('/me', {fields:['id','name','email']}, (response) => {
    models.create({
      id: response.id,
      name: response.name,
      email: response.email
    })
    .then(result => {
      res.send(result)
    })
    .catch(err => {
      res.send(err)
    })
  })
}

var getUser = (req, res) => {
  models.find({})
  .then(result => {
    res.send(result)
  })
  .catch(err => {
    res.send(err)
  })
}

var deleteUser = (req, res) => {
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
  login,
  getUser,
  deleteUser
};
