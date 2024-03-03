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


const check_user=(req,res,next)=>{
    if(req.session.user){
        console.log("00000000000",req.session.user)
        if(req.session.user.userData.msg[0].user_flag=='U'){
            next();
        }else{
            res.redirect("/login")
        }

    }else{
        res.redirect("/login")
    }
}

const check_bank=(req,res,next)=>{
    if(req.session.user){
        if(req.session.user.userData.msg[0].user_flag=='B'){
            next();
        }else{
            res.redirect("/login")
        }

    }else{
        res.redirect("/login")
    }
}


const check_admin=(req,res,next)=>{
    if(req.session.user){
        if(req.session.user.userData.msg[0].user_flag=='A'){
            next();
        }else{
            res.redirect("/login")
        }

    }else{
        res.redirect("/login")
    }
}

module.exports={auth_check,check_user,check_bank,check_admin}