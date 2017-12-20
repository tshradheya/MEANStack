var express = require('express');
var router = express.Router();
var jwt =  require('jsonwebtoken')

var Message =  require('../models/message')
var User = require('../models/user')

router.get('/', function(req, res, next){
    Message.find()
    .populate('user', 'firstName')
    .exec(function(err, messages){
        if(err) {
            return res.status(500).json({
                title: 'An error occured',
                error: err
            })
        }
        res.status(200).json({
            message: 'Success messages recieved',
            obj: messages
        })
    })
})

router.use('/', function(req, res, next){
    jwt.verify(req.query.token, 'secret', function(err, decoded){
        if(err) {
            return res.status(401).json({
                title: 'Not Auth ',
                error: {message: 'Invalid login credentials'}
            })
        }
        next();
    })
})

router.post('/', function (req, res, next) {
    var decoded = jwt.decode(req.query.token)
    User.findById(decoded.user._id, function(err, user){
        if(err) {
            return res.status(500).json({
                title: 'An error occured',
                error: err
            })
        }
        const  message = new Message( {
            content: req.body.content,
            user: user._id
        })
        //console.log(message)
        message.save(function(err, result){
            if(err) {
                return res.status(500).json({
                    title: 'An error occured',
                    error: err
                })
            }
            user.messages[user.messages.length] = result;
            //user.messages.concat({result});
            //console.log(user)
            //console.log(result)
            return res.status(201).json({
                message: 'Message saved',
                obj: result
            })
            user.save();

        })
    })
})


router.patch('/:id', function(req, res, next) {
    var decoded = jwt.decode(req.query.token)

    Message.findById(req.params.id, function(err, message) {
        if(err) {
            return res.status(500).json({
                title: 'An error occured',
                error: err
            })
        }
        if(!message) {
            return res.status(500).json({
                title: 'No message found!',
                error: {message: 'Message not found'}
            })
        }
        if(message.user != decoded.user._id) {
            return res.status(401).json({
                title: 'Not Auth ',
                error: {message: 'Invalid login credentials'}
            })
        }
        message.content = req.body.content;

        message.save(function(err, result) {
            if(err) {
                return res.status(500).json({
                    title: 'An error occured',
                    error: err
                })
            }
            res.status(200).json({
                message: 'Message updated',
                obj: result
            })
        })
    })
})


router.delete('/:id', function(req, res, next){
    var decoded = jwt.decode(req.query.token)

    Message.findById(req.params.id, function(err, message) {
        if(err) {
            return res.status(500).json({
                title: 'An error occured',
                error: err
            })
        }
        if(!message) {
            return res.status(500).json({
                title: 'No message found!',
                error: {message: 'Message not found'}
            })
        }
        if(message.user != decoded.user._id) {
            return res.status(401).json({
                title: 'Not Auth ',
                error: {message: 'Invalid login credentials'}
            })
        }
        message.content = req.body.content;
        message.remove(function(err, result) {
            if(err) {
                return res.status(500).json({
                    title: 'An error occured',
                    error: err
                })
            }
            res.status(200).json({
                message: 'Message updated',
                obj: result
            })
        })
    })
})

module.exports = router;
