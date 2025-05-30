import express from 'express';
const app = express() ; 
import {PORT} from './config/env.js'

import userRouter from './routes/user.routes.js';
import authRouter from './routes/auth.routes.js';
import subscriptionRouter from './routes/subscription.routes.js';
import connectToDatabase from './database/mongodb.js';


app.use('/api/v1/auth' , authRouter);
app.use('/api/v1/users' , userRouter);
app.use('/api/v2/subscriptions' , subscriptionRouter) ; 

app.get('/' , (req ,res)=>{
    res.send('Welcome to the Subscription Tracker API')
})



app.listen(PORT , async()=>{
    console.log(`server running at the PORT:${PORT}\nVisit http://localhost:${PORT}`)
    await connectToDatabase();
})