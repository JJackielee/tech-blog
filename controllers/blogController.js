const express = require('express');
const router = express.Router();
const {User,Blog,Comment} = require('../models');

router.get("/",(req,res)=>{
    Blog.findAll({
        include:[User]
    }).then(blogData=>{
        res.json(blogData)
    }).catch(err=>{
        console.log(err);
        res.status(500).json({msg:"oh noes!",err})
    })
})

router.get("/:id",(req,res)=>{
    Blog.findByPk(req.params.id,{
        include:[{model:User},{ model: Comment, include: [User] }]
    }).then(blogData=>{
        console.log(blogData)
        res.json(blogData)
    }).catch(err=>{
        console.log(err);
        res.status(500).json({msg:"oh noes!",err})
    })
})


router.post("/",(req,res)=>{
    if(!req.session.userId){
       return res.status(403).json({msg:"login first post"})
    }
    console.log(req.body);
    Blog.create({
        title:req.body.title,
        text:req.body.text,
        UserId:req.session.userId
    }).then(blogData=>{
        res.json(blogData)
    }).catch(err=>{
        console.log(err);
        res.status(500).json({msg:"oh noes!",err})
    })
 })

 router.delete("/:id",(req,res)=>{
    if(!req.session.userId){
       return res.status(403).json({msg:"login first post"})
    }
    console.log(req.body);
    Blog.findByPk(req.params.id).then(blogData=>{
       if(!blogData){
          return res.status(404).json({msg:"no such chirp"})
       } else if(blogData.UserId!== req.session.userId){
          return res.status(403).json({msg:"not your chirp!"})
       }
       Blog.destroy({
        where:{
           id:req.params.id,
        }
       }).then(chirpData=>{
         res.json(blogData)
        }).catch(err=>{
         console.log(err);
         res.status(500).json({msg:"oh noes!",err})
        })
    }).catch(err=>{
         console.log(err);
         res.status(500).json({msg:"oh noes!",err})
    })
 })

    
router.put("/:id",(req,res)=>{
    Blog.update(req.body, {
        where: {
        id: req.params.id,
        }
    })  
    .then(blogData=>{
        res.json(blogData)
    }).catch(err=>{
        console.log(err);
        res.status(500).json({msg:"oh noes!",err})
    })
})



module.exports = router;