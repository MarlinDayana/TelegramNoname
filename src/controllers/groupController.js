const {Request, Response} = require('express');

const Group = require('../models/groupModel');



const groupGet =(req, res)=>{
    res.send('its working')
}

const groupPost =(req, res)=>{
    res.send('its working')

}

const groupPut =(req, res)=>{
    res.send('its working')

}

const groupDelete =(req, res)=>{
    res.send('its working')

}


module.exports ={
    groupGet, 
    groupPost, 
    groupPut, 
    groupDelete
}