const Router = require('express') ; 
const subscriptionRouter = Router() ; 

subscriptionRouter.get('/' , (req , res)=>{
    res.status(200).send({
        title:"GET all subscriptions"
    })
})

subscriptionRouter.get('/:id' , (req , res)=>{
    res.status(200).send({
        title:"GET subscription details"
    })
})
subscriptionRouter.post('/' , (req , res)=>{
    res.status(200).send({
        title:"CREATE subscription"
    })
})
subscriptionRouter.put('/:id' , (req , res)=>{
    res.status(200).send({
        title:"UPDATE subscription"
    })
})
subscriptionRouter.delete('/:id' , (req , res)=>{
    res.status(200).send({
        title:"DELETE subscription"
    })
})

subscriptionRouter.get('/user/:id' , (req , res)=>{
    res.status(200).send({
        title:"GET all user subscriptions"
    })
})

subscriptionRouter.put('/:id/cancel' , (req , res)=>{
    res.status(200).send({
        title:"CANCEL subscriptions"
    })
})
subscriptionRouter.get('/upcoming-renewals' , (req , res)=>{
    res.status(200).send({
        title:"GET upcoming renewals"
    })
})

module.exports = subscriptionRouter