const mongoose=require('mongoose');

const postsSchema=new mongoose.Schema({
    userId:{
        type:String,
        required:true
    },
    date:{
        type: String,
        required: true
    },
    time:{
        type:String,
        required:true
    },
    tittle:{
        type:String,
        required:true
    },
    body:{
        type:String,
        required:true
    }
});

module.exports=mongoose.model('Posts',postsSchema);