const { f_select } = require("../../model/master_model");

const dashboard = async (req, res) => {
   
}

const bank_list=async (req,res)=>{

    let userdata = req.session.user.userData.msg[0];
    console.log("//////////", userdata);
    let where=`bank_mobile=${userdata.mobile_no}`

    let tableData=await f_select("*","md_bank",where,null)
    console.log(tableData)
    res.render("user/bank/bank_list",tableData)
}


const blood_stock=async (req,res)=>{

    let userdata = req.session.user.userData.msg[0];
    console.log("//////////", userdata);
    let where=`bank_id=${userdata.mobile_no}`

    let tableData=await f_select("*","td_blood_stock",where,null)
    console.log(tableData)
    res.render("user/bank/blood_stock",tableData)
}

module.exports = { dashboard,bank_list,blood_stock }