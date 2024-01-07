const { db } = require("../config/db");

const f_insert=(fild,value,table,where,flag)=>{

    if(flag>0){

    }else{
        sql=`INSERT INTO ${table} (${fild}) VALUES ${value}`
    }
    return new Promise((resolve,reject)=>{
        db.query(sql,(error,result)=>{
            if(error){
                data={suc:0,msg:JSON.stringify(error)}
            }else{
                data={suc:1,msg:result,sql:sql}
            }
            resolve(data)
        })
    })
}
const f_select_admin=()=>{
    var sql=`SELECT user_name, id FROM admin`;
    return new Promise((resolve,reject)=>{
        db.query(sql,(error,result)=>{
            if(error){
                data={suc:0,msg:JSON.stringify(error)}
            }else{
                data={suc:1,msg:result,sql:sql}
            }
            resolve(data)
        })
    })
}




const f_select=(select,table,where,order)=>{

    let where_q=where?` WHERE ${where}`:'';
    let order_by=(order)?order:'';
    var sql=`SELECT ${select} FROM ${table}${where_q} ${order_by}`;
    return new Promise((resolve,reject)=>{
        db.query(sql,(error,result)=>{
            if(error){
                data={suc:0,msg:JSON.stringify(error)}
            }else{
                data={suc:1,msg:result,sql:sql}
            }
            resolve(data)
        })
    })
}


const f_delete=(table,where)=>{

    let where_q=where?` WHERE ${where}`:'';
    var sql=`DELETE FROM ${table} ${where_q}`;
    return new Promise((resolve,reject)=>{
        db.query(sql,(error,result)=>{
            if(error){
                data={suc:0,msg:JSON.stringify(error)}
            }else{
                data={suc:1,msg:result,sql:sql}
            }
            resolve(data)
        })
    })
}


const f_update=(table,setData,where)=>{
    let where_q = where ? ` where ${where}`:'';
    let sql= `UPDATE ${table} SET ${setData} ${where_q}`
    return new Promise((resolve,result)=>{
        db.query(sql,(error,result)=>{
            if (error) {
                data={suc:0,msg:JSON.stringify(error)}
            } else {
                data={suc:1,msg:JSON.result,sql:sql}
            }
            resolve(data);
        })
    })
}



module.exports={f_insert,f_select_admin,f_select,f_delete,f_update
}