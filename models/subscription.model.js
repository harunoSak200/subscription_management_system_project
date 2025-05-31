const mongoose = require('mongoose') ; 

const { options } = require('../routes/subscription.routes');

const subscriptionSchema = new mongoose.Schema({
    name : {
        type : String , 
        required : [true , 'Subscription name is required'] , 
        trime : true , 
        minLength : 2 , 
        maxLength : 100
    } , 
    price :{
        type : Number , 
        required : [true , 'Subscription price is required'] , 
        min : [0 , 'Price must be greater than 0']
    } , 
    currency:{
        type : String ,  
        enum : ['USD' , 'EUR' , 'GBP' , 'INR' , 'YEN'] , 
        default : 'USD'
    } , 
    frequency : {
        type : String , 
        enum : ['daily' , 'weekly' , 'monthly' , 'yearly'] , 
    } , 
    category : {
        type : String , 
        enum : ['sports' , 'news' , 'entertainment' , 'lifestyle' , 'technology' , 'finance' , 'politics' , 'other']  ,
        default : 'active'
    } , 
    startDate : {
        type : Date , 
        required : true , 
        validate : {
            validator : (value)=> value <= new Date() , 
            message : 'Start date must be in the past'
        }
    } , 
    renewalDate:{
        type : Date , 
        // required : true , 
        validate : {
            validator : function(value){
                return value > this.startDate
            } , 
            message : "Renewal date  must be greater than the start date"
        }
    } , 
    user : {
        type : mongoose.Schema.Types.ObjectId , 
        ref : 'User' , 
        required : true , 
        index : true , 
    }
} , {timestamps:true}) ; 


// auto calculate the renewal date if missing : 
subscriptionSchema.pre('save' , function(next){
    if(!this.renewalDate){
        const renewalPeriods = {
            daily : 1 , 
            weekly : 7 , 
            monthly : 30 , 
            yearly : 365
        }
        this.renewalDate = new Date(this.startDate) ; 
        this.renewalDate.setDate(this.renewalDate.getDate() + renewalPeriods[this.frequency]) ; 
    } ;
    // auto - update the status if the renewal date has passed : 
    if(this.renewalDate < new Date()){
        this.status = 'expired'

    }

    next() ;  
})

const subscription = mongoose.model('Subscription' , subscriptionSchema);
modules.exports = subscription ; 