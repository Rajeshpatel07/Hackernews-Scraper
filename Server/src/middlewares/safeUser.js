require('dotenv').config()
const jwt=require('jsonwebtoken')

const safeUser=(req,res,next)=>{
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

// const safeUser = (req, res, next) => {
// const token = req.headers.authorization?.replace('Bearer ', '');

// if (!token) {
//     return res.status(401).json({ error: 'Unauthorized' });
// }

// try {
//     const decoded = jwt.verify(token, 'your_secret_key');
//     // Perform additional checks if needed

//     res.locals.user = decoded; // Store user information in res.locals if needed
//     next();
// } catch (error) {
//     res.status(401).json({ error: 'Unauthorized' });
// }
// };

// module.exports = safeUser;


module.exports=safeUser;