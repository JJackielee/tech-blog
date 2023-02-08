const express = require('express');
const router = express.Router();
const {User,Blog} = require('../models');

router.get("/",(req,res)=>{
    Blog.findAll().then(blogData=>{
        res.json(blogData)
    }).catch(err=>{
        console.log(err);
        res.status(500).json({msg:"oh noes!",err})
    })
})

router.get("/:id",(req,res)=>{
    Blog.findByPk(req.params.id,{
    //include:[User]
    }).then(blogData=>{
        res.json(blogData)
    }).catch(err=>{
        console.log(err);
        res.status(500).json({msg:"oh noes!",err})
    })
})
router.post("/",(req,res)=>{
    console.log(req.body);
    Blog.create({
        post:req.body.post,
        //UserId:req.body.UserId
    }).then(blogData=>{
        res.json(blogData)
    }).catch(err=>{
        console.log(err);
        res.status(500).json({msg:"oh noes!",err})
    })
})

module.exports = router;