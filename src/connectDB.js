const mongoose = require('mongoose');
require('dotenv').config();

const dbConection = async ()=>{

  try{
    await mongoose.connect(process.env.url, { 
      useNewUrlParser: true,
      useUnifiedTopology: true,
      //useCreateIndex: true,
      //useFindAndModify:false
    })
  
    console.log('Base de datos online')

  }catch(error){
    console.log(error)
  }
  

// const db =  mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:')); // enlaza el track de error a la consola (proceso actual)
// db.once('open', () => {
//   console.log('connected'); // si esta todo ok, imprime esto
// });

}


module.exports=dbConection;