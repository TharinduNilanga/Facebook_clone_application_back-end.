const express=require('express');
const router=express.Router();

const User=require('../models/user.models');

router.get('/:email/:password',async (req,res)=>{

});
router.post('/',async (req,res)=>{
    const email=req.body.email;
    const password=req.body.password;
    try {
        const user= await User.find();
        for( const log of user){
            if (log.email===email&&log.password===password){
                // console.log(log.email+" "+req.params.email)
                // console.log(log.password+" "+req.params.password)
                // res.send("success")
                // console.log("ok")
                res.send(log)
            }
        }
    }catch (e) {
        res.send("Error :"+e)
    }
});

module.exports=router;
