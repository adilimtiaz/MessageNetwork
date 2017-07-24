var express = require('express');
var router = express.Router();

var Message=require("../models/message");

router.get('/', function(req,res,next){
   Message.find().exec(function(err, messages){
       if(err){
           return res.status(500).json({
               title: 'AN ERROR',
               error: err
           });
       }
       res.status(201).json({
           message: 'Great success',
           obj: messages
       });
   });
});

router.post('/', function (req, res, next) {
    var msg=new Message({
        content: req.body.content
    });
    msg.save(function(err, result){
        if(err){
            return res.status(500).json({
                title: 'AN ERROR',
                error: err
            });
        }
        res.status(201).json({
            message: 'Saved message',
            obj:result
        });
    });
});

router.patch('/:id', function(req,res,next){
   Message.findById(req.params.id,function(err,msg){
       if(err){
           return res.status(500).json({
               title: 'AN ERROR',
               error: err
           });
       }
       if(!msg){
           return res.status(500).json({
               title: 'AN ERROR',
               error: {message: 'Message not found'}
           });
       }
       msg.content=req.body.content;
       msg.save(function(err, result){
           if(err){
               return res.status(500).json({
                   title: 'AN ERROR',
                   error: err
               });
           }
           res.status(200).json({
               message: 'Edited message',
               obj:result
           });
       });
   })
});

router.delete('/:id', function(req,res,next){
    Message.findById(req.params.id,function(err,msg){
        if(err){
            return res.status(500).json({
                title: 'AN ERROR',
                error: err
            });
        }
        if(!msg){
            return res.status(500).json({
                title: 'AN ERROR',
                error: {message: 'Message not found'}
            });
        }
        msg.content=req.body.content;
        msg.remove(function(err, result){
            if(err){
                return res.status(500).json({
                    title: 'AN ERROR',
                    error: err
                });
            }
            res.status(200).json({
                message: 'Deleted message',
                obj:result
            });
        });
    })
});

module.exports = router;
