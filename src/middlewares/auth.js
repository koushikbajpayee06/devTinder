const adminAuth = (req,res,next)=>{
    console.log("Admin auth is checking...")
    const token = "xyz";
    isAdminAuthorized = token === "xyz";
    if(!isAdminAuthorized){
        res.status(401).send("Unauthorized Admin...")
    }else{
        next()
    }
}

const userAuth= (req,res,next)=>{
    console.log("User Authorized");
    const token = "xyz";
    isUserAuthorized = token === "xyz";
    if(!isUserAuthorized){
        res.status(401).send("Unauthorized Admin...")
    }else{
        next()
    }
}

module.exports = {
    adminAuth,
    userAuth
}
