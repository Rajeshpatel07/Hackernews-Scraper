const db=require('../model/users.model')
const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken')
const cookie=require('cookie-parser')

const home = (req,res)=>{
    return res.send("this is the home route")
}

const register = async(req,res)=>{
    const {email,password}=req.body;
    if(!email || !password){
        return res.json({message:"All fields are necessary"})
    }
    try{
        const hashpassword=await bcrypt.hash(password,10);
        const user=await db.create({
            email:email,
            password:hashpassword
        })
        return res.json({message:"Registered Successfully"})
    }
    catch{
        res.json({message:"Registration failed"})
    }
}

const login = async (req,res)=>{
    const {email,password}=req.body;
    if(!email || !password){
        return res.json({message:"All fields are necessary"})
    }
    try{
        const user=await db.findOne({email:email})
        if(!user){
            return res.json({message:"Please register first"})
        }
        const comparePassword=await bcrypt.compare(password,user.password)
        if(comparePassword){
            const AccessToken=await jwt.sign({id:user._id},process.env.SECRET_KEY)
            console.log(AccessToken);
            res.cookie('jwt',AccessToken,{httpOnly:true});
            return res.redirect('/dashboard')
        }else{
            return res.json({message:"Failed to generate Token"})
        }
    }
    catch(err){
        console.log(err)
        res.json({message:"Error Occur try again"})
    }
}

const dashboard =(req,res)=>{
    return res.json({message:"Welcome"})
}

const logout=(req,res)=>{
    res.cookie('jwt','',{maxAge:1});
    res.redirect('/');
}

module.exports = {home,register,login ,dashboard};