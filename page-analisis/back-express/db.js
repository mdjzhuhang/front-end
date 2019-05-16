var mysql = require("mysql");
var pool = mysql.createPool({
    host:"localhost",
    user:"root",
    password:"000000", // 要填数据库密码
    database:"analise_data"
});

function query(sql,callback){
    pool.getConnection(function(err,connection){
        if (err) {
            console.log('数据库链接失败')
            console.log(err)
        }
        connection.query(sql, function(err,rows) {
            callback(err, rows);
            connection.release();
        });
    });
}

exports.query = query;