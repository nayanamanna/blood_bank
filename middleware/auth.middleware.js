const auth_check=(req,res,next)=>{
    try{
        if(!req.session.user){
            res.redirect("/login")
        }else{
            next();
        }
    }catch(error){

    }
}

module.exports={auth_check}