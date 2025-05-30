import {mongoose} from 'mongoose' ;
import { PORT ,  DB_URI , NODE_ENV} from '../config/env';  

if(!DB_URI){
    throw new Error('Please define the MONGODB_URI environment variable inside .env.<developement/production>.local') ; 
}

// connection : 
const connectToDatabase = async()=>{
    try{
        await mongoose.connect(DB_URI) ; 
        console.log(`connected to database in ${NODE_ENV}`)
    }
    catch(e){
        console.error('error connection to database' , e)
        process.exit(1) ;
    }
}

export default connectToDatabase ; 