import {Router} from 'express'
const userRouter = Router() ; 

userRouter.get('/' , (req , res)=>{
    res.status(200).send({
        title : 'Get all users'
    })
})
userRouter.get('/:id' , (req , res)=>{
    res.status(200).send({
        title : 'GET User Details'
    })
})
userRouter.post('/' , (req , res)=>{
    res.status(200).send({
        title : 'CREATE a new user'
    })
})
userRouter.put('/:id' , (req , res)=>{
    res.status(200).send({
        title : 'UPDATE user'
    })
})
userRouter.delete('/:id' , (req , res)=>{
    res.status(200).send({
        title : 'DELETE user'
    })
})

export default userRouter ;