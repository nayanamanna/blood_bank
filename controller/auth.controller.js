const { f_insert } = require("../model/master_model")

const home = async (req, res) => {
    try {
        res.render("public/home")
    } catch (error) {
        res.render("public/home")
    }
}
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
        let fild = `name,mobile_no,password,address,user_flag,active_status`,
            value = `('${name}','${mobile_no}','${password}','${address}','${user_type}','A')`;
        var insertdata = await f_insert(fild, value, 'md_user', null, 0);
        console.log(insertdata)
        res.redirect("/login")
        console.log(name)
    } catch (error) {
        res.redirect("/register")
    }
}



module.exports = { home,register,login, register_post }