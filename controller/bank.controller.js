const { f_select } = require("../model/master_model");

const bank_info = async(req,res)=>{
    let select = `*`,
            whe = null;
        var bankdata = await f_select(select, 'md_bank', whe, null);
        res.send(bankdata)
}

module.exports={bank_info}