const mongoose = require('mongoose') ; 
const userSchema = new mongoose.Schema({
    name : {
        type : String , 
        required : [true , 'User name is required'] , 
        trim : true , 
        minLength : 2 , 
        maxLength : 50
    } , 
    email : {
        type : String , 
        required : [true , 'User email cannot be empty'] , 
        trim : true , 
        unique : [true , 'User exist already , try with different email id'] , 
        match :[/\s+@\s+\.\s+/ , 'Please fill a valid emaila address'] ,
        lowercase:true

    } , 
    password : {
        type  : String , 
        require : [true , 'User password is required'] , 
        minLength : 8 , 
    }
   



} , {timestamps : true}) ;

const User = mongoose.model('User' , userSchemma) ; 
module.exports = User ;