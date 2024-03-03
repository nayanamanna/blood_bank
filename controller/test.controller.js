const user_info = (req,res)=>{
    // try{
        console.log(req.session)
        res.send(req.session.user);
    // }catch(err){

    // }
}
module.exports={user_info}