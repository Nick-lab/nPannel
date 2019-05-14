const mysql = require('mysql');
const con = mysql.createConnection(global.database);
var connected = false;

function Query(sql){
    return new Promise((res)=>{
        Connect().then((err)=>{
            if(err) res({error: err});
            con.query(sql, (err, result)=>{
                if(err) res({error: err});
                res(result);
            })
        })
    })
}

function Select(options){
    return new Promise((res)=>{
        if(!options.table) res({error: 'No Table defined'});
        sql = `SELECT ${options.columns ? options.columns.join(',') : '*'} FROM ${options.table} ${(options.where ? 'WHERE ' + [options.where].join(',') : '')}`;
        Connect().then((err)=>{
            if(err) res({error: err});
            con.query(sql, (err, result)=>{
                if(err) res({error: err});
                res(result);
            })
        })
    })
}

function Connect(){
    return new Promise((res)=>{
        if(connected) res();
        else con.connect((err)=>{
            if(err) res(err);
            connected = true;
            res();
        })
    })
}

module.exports.select = Select;
module.exports.query = Query;