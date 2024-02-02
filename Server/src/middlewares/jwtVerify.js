require('dotenv').config()
const jwt=require('jsonwebtoken')

const jwtverify=(req,res,next)=>{
    const {jwt} = req.cookies;
    if(!jwt){
        return res.redirect('/')
    }
    jwt.verify(jwt,process.env.SECRET_KEY,(err,decode)=>{
        if(err){
            return res.redirect('/')
        }
        else{
            next();
        }
    })
}

module.exports=jwtverify;