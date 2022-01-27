const { request, response } = require ('express');

const User = require ('../models/userModel');


const getUser = async (req, res) =>{
    const query = {estado: true}
    const [total, usuarios]= await Promise.all([
        User.countDocuments(query),
        User.find(query),
        
    ])
    res.json({
        total,
        usuarios
    })
}

const getOneUser = async (req, res) =>{
    const id = req.params.id;

    const user = await User.findById(id);

    res.json({user});
}

const postUser = async (req=Request, res) =>{
    try{
        const {nombre, celular, username} = req.body;
        const user = new User({nombre, celular, username});
        await user.save();
        res.json({user});
    }catch(error){
        console.log(error);
    }
    
   
}

const putUser = async (req, res) =>{

    const id = req.params.id
    const {nombre, celular, username} = req.body;

    const user = await User.findByIdAndUpdate(id, {nombre, celular, username}, {new:true})

    res.json({user});
}

const deleteUser = async (req, res) =>{
    
    const id = req.params.id;
    
    const user = await User.findByIdAndUpdate(id, {estado:false});

    res.json(`usuario ${user.nombre} eliminado`);
}


module.exports ={
    getUser,
    postUser,
    putUser,
    deleteUser,
    getOneUser

}