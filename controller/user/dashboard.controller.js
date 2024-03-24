const { f_select } = require("../../model/master_model")

const dashboard = (req, res) => {
    res.render("user/dashboard")
}

const bank_list = async (req, res) => {
  
    let tableData = await f_select("*", "md_bank", null, null)
    console.log(tableData)
    res.render("user/bank/bank_list", tableData)
}
module.exports = { dashboard, bank_list }