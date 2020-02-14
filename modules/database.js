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
        sql = `SELECT ${options.columns ? options.columns.join(',') : '*'} FROM ${options.table} ${(options.where ? 'WHERE ' + [options.where].join(' ') : '')}`;
        Connect().then((err)=>{
            if(err) res({error: err});
            con.query(sql, (err, result)=>{
                if(err) res({error: err});
                res(result);
            })
        })
    })
}

function GetRow(sql) {
    return new Promise((res) => {
        Query(sql).then((result) => {
            if(result.error) res(result);
            else res(result[0]);
        })
    })
}

function Insert(table, data) {
    return new Promise((res) => {
        Query(`INSERT INTO ${table} (${'`' + Object.keys(data).join('`,`') + '`'}) VALUES (${'"' + Object.values(data).join('","') + '"'})`).then((result) => {
            if(result.error) res(result);
            else res(result[0]);
        })
    })
}

function Connect(){
    return new Promise((res)=>{
        if(connected) res();
        else {
            try {
                con.connect((err)=>{
                    if(err) {
                        res(err);
                    } else {
                        connected = true;
                        res();
                    }
                })
            } catch (e) {
            }
        }
    })
}



module.exports.select = Select;
module.exports.query = Query;
module.exports.getRow = GetRow;
module.exports.insert = Insert;