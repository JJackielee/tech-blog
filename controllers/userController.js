const express = require('express');
const router = express.Router();
const {User} = require('../models');
const bcrypt = require("bcrypt");

router.get("/",(req,res)=>{
    User.findAll().then(userData=>{
     res.json(userData)
    }).catch(err=>{
     console.log(err);
     res.status(500).json({msg:"uh oh",err})
    })
 })


router.post("/",(req,res)=>{
    console.log(req.body);
    User.create({
        email:req.body.email,
        password:req.body.password
    }).then(userData=>{
    // req.session.userId = userData.id;
    // req.session.userEmail = userData.email;
    res.json(userData)
    }).catch(err=>{
        console.log(err);
        res.status(500).json({msg:"oh noes!",err})
    })
})

 module.exports = router;