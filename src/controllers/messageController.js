const {Request, Response} = require('express');

const Message = require('../models/messageModel');



const messageGet =(req, res)=>{
    res.send('its working')
}

const messagePost =(req, res)=>{
    res.send('its working')

}

const messagePut =(req, res)=>{
    res.send('its working')

}

const messageDelete =(req, res)=>{
    res.send('its working')

}


module.exports ={
    messageGet, 
    messagePost, 
    messagePut, 
    messageDelete
}