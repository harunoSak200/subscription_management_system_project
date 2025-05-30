import {Router} from 'express' 
const authRouter = Router() ; 


// -- /api/v1/auth/sign-up
authRouter.post('/sign-up' , (req , res)=>{
    res.status(200).send({
        title : "sign up"
    })
}) ; 
authRouter.post('/sign-in' , (req , res)=>{
    res.status(200).send({
        title : "sign in"
    })
}) ; 
authRouter.post('/sign-out' , (req , res)=>{
    res.status(200).send({
        title : "sign out"
    })
}) ; 

export default authRouter ; 
