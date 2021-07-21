const mongoose = require('mongoose');
//create mongoose model class in order to make our mongo collection of Users records inside our mongo db
const { Schema } = mongoose;
//pull one property off of this mongoose obj
//const Schema = mongoose.Schema
//or const {Schema} = mongoose
//ES 2015 DESTRUCTURING  mongoose obj has a new property called Schema
//collection has many records and
//every records has diff props

const userSchema = new Schema({
  googleId: String,

})

//to create a class
mongoose.model('users', userSchema)//loading into mongoose
//crated a user schem and we loaded the schema into mongoose we are

//2 args loads into mongoose
