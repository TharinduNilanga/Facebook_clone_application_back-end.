const express=require('express');
const router=express.Router();

const Posts=require('../models/posts.model');
router.get('/',async(req,res)=>{
    try {
        const response=await Posts.find();
        res.send(response);
    }catch(err){
        res.send('error : '+err)
    }
});
router.post('/',async(req,res)=>{
    const post=new Posts({
        userId:req.body.userId,
        date:req.body.date,
        time:req.body.time,
        tittle:req.body.tittle,
        body:req.body.body
    })
    try {
        const response=await post.save();
        res.send(response);
    }catch (e) {
        res.send('error : '+e)
    }
});
router.get('/:id',async(req,res)=>{
    try {
        const response = await Posts.findById(req.params.id);
        res.send(response)
    }catch (e) {
        res.send(e)
    }
});
router.put('/:id',async(req,res)=>{
    try {
        const post=await Posts.findById(req.params.id);
        post.userId=req.body.userId;
        post.date=req.body.date;
        post.time=req.body.time;
        post.tittle=req.body.tittle;
        post.body=req.body.body;

        const response=await post.save();
        res.send(response)
    }catch (e) {
        res.send(e)
    }
})
router.delete('/:id',async(req,res)=>{
    try{
        const post=await Posts.findById(req.params.id);

        const response=await post.remove();
        res.send(response)
    }catch (e) {
        res.send(e)
    }
})




module.exports=router