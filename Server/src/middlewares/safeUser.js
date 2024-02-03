require('dotenv').config()
const jwtToken=require('jsonwebtoken')

const safeUser=(req,res,next)=>{
    const {jwt} = req.cookies;
    if(!jwt){
        return res.json({message:"Go to Home"})
    }
    jwtToken.verify(jwt,process.env.SECRET_KEY,(err,decode)=>{
        if(err){
            return res.json({message:"Go to Home"})
        }
        else{
            next();
        }
    })
}



module.exports=safeUser;