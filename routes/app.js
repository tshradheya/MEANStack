var express = require('express');
var router = express.Router();


router.get('/', function (req, res, next) {
  res.render('index');
})

/*router.post('/', function (req, res, next) {
  var email = req.body.email;
  var user = new User({
      firstName: 'Shraddy',
      lastName: 'Thakre',
      password: 'password-cool',
      email: email,
  });
  user.save();
  res.redirect('/');
})
*/

//var User  = require('../models/user')

/*router.get('/', function (req, res, next) {
    User.findOne({}, function(err, doc) {
      if(err) {
        return res.send('Error!')
      }
      res.render('node', {email: doc.email});
    })
});
*/

module.exports = router;
