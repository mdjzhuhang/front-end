let express = require('express');
let router = express.Router();
let db = require('./db');


/**
 * 查询
 */
router.get("/api/getDatas",function(req,res,next){
    console.log('/select')
    db.query("select * from link_tbl",function(err,rows){
        if(err){
            console.log('select失败');
            res.status('500').send(err)
        }else {
            console.log('select成功');
            console.log(rows)
            res.status('200').send({datas:rows});
        }
    });
    // 如果中间件终结了本次请求，那就不应该再调用next函数，
})

module.exports = router;