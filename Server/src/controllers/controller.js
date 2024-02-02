const home = (req,res)=>{
    return res.send("this is the home route")
}

const register = (req,res)=>{
    return res.send("this is the register route");
}

const login = (req,res)=>{
    return res.send("this is the login Page");
}

const dashboard =(req,res)=>{
    return res.send("this is the dashboard where the news is shown ");
}

module.exports = {home,register,login ,dashboard};