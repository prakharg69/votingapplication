const express=require('express');
const router =express.Router();
const user = require('../models/user');
const { raw } = require('body-parser');


const bodyParser =require('body-parser');
router.use(bodyParser.json());

router.post('/signup',async (req,res)=>{
    try{
        const data =req.body;

        const newUser = new user(data);
        
        const result =await newUser.save();

        res.status(200).json({DATA: result});
    }
    catch(err){
        console.log(err);
        res.status(500).json({error:'Internal server error'}); 
        
    }
});



module.exports=router;