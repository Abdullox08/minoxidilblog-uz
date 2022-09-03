const fs = require('fs')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config()
const Posters = require('./models/posterModels')
const User = require('./models/userModels')
mongoose.connect(process.env.MONGO_URI,{
  useNewUrlParser:true,
  useCreateIndex:true,
  useFindAndModify:false,
  useUnifiedTopology:true
}
)
const users = JSON.parse(fs.readFileSync(`${__dirname}/_data/users.json`,'utf-8'))
const posters = JSON.parse(fs.readFileSync(`${__dirname}/_data/posters.json`,'utf-8'))

// data import to db
const importData = async()=>{
  try {
    await User.create(users)
    await Posters.create(posters)
    console.log('imported data base..!!!');
    process.exit()
  } catch (err) {
    console.log(err)
  }
}
const deletedData = async ()=>{
  try {
    await User.deleteMany()
    await Posters.deleteMany()
    console.log('data deleted');
    process.exit()
  } catch (err) {
    console.log(err);
  }
}

if(process.argv[2]==='-i'){
importData()
}else if(process.argv[2]==='-d'){
  deletedData()
}