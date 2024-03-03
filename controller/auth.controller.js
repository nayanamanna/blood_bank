const bcrypt = require('bcrypt');
const { f_insert, f_select } = require("../model/master_model")

const register = async (req, res) => {
    try {
        res.render("auth/register")
    } catch (error) {
        res.render("auth/register")
    }
}


const login = async (req, res) => {
    try {
        res.render("auth/login")
    } catch (error) {
        res.render("auth/login")
    }
}



const register_post = async (req, res) => {
    try {
        let name = req.body.name
        let mobile_no = req.body.mobile_no
        let address = req.body.address
        let password = req.body.password
        let user_type = req.body.user_type


        const haspass = await bcrypt.hashSync(password, 10);

        let fild = `name,mobile_no,password,address,user_flag,active_status`,
            value = `('${name}','${mobile_no}','${haspass}','${address}','${user_type}','A')`;
        var insertdata = await f_insert(fild, value, 'md_user', null, 0);
        console.log(insertdata)
        res.redirect("/login")
        console.log(name)
    } catch (error) {
        res.redirect("/register")
    }
}




const login_post = async (req, res) => {
    try {
        let mobile_no = req.body.mobile_no
        let password = req.body.password
        let select = `*`,
            whe = `mobile_no='${mobile_no}'`;
        var userData = await f_select(select, 'md_user', whe, null);
        if((userData.msg).length>0){
            console.log(userData.msg)
            console.log(userData.msg[0].password)
            if(await bcrypt.compare(password, userData.msg[0].password)){

                let usertype=userData.msg[0].user_flag
                req.session['user']={userData}
                if(usertype=='U'){
                    console.log(usertype)
                    res.redirect("/user/dashboard")
                }else if(usertype=='B'){
                    res.redirect("/")
                }else if(usertype=='A'){
                    res.redirect("/")
                }

                // 

                //  res.send(userData);
            }else{
                res.redirect("/login")
            }
           

            // console.log()
            //res.send(userData);
        }else{
            res.redirect("/login")
        }

    } catch (error) {
        res.redirect("/login")
    }
}



module.exports = { register, login, register_post ,login_post}