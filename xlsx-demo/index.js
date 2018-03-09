let xlsx = require('node-xlsx');
let fs = require('fs');

let startTime = new Date();
startTime.getTime();

//mock 生成excel
/*
let data = [
    ['', 'url', '20171021', '20171022', '20171023', '20171024'],
    ['', 'https://css1.ncfb.pingan.com.cn/ncfb/static/PC/assets/images/icon/new-title.png', '25','13','13','16'],
    ['', 'https://js1.ncfb.pingan.com.cn/ncfb/static/PC/assets/images/icon-rt.png', '18','14','12','5'],
    ['', 'https://css1.ncfb.pingan.com.cn/ncfb/static/PC/assets/images/icon-rt.png', '4','9','2','5'],
];
let file = xlsx.build([{name: 'statistic', data: data}]);
fs.writeFileSync('result1.xlsx', file, 'binary');
*/

// 获取文件名
let excelnames = fs.readdirSync('dist');

// 获得的数据，三维数组：文件--行--单元格
let datas = [];
for (i = 0, len = excelnames.length; i < len; i++) {
    if (excelnames[i].indexOf('xls') != -1) {
        // 读取excel的内容
        let file = xlsx.parse('./dist/' + excelnames[i]);
        datas.push(file[0].data);
    }
}
if (datas.length == 0) {
    console.log('无xls或xlsx文件');
    return
}

// 目标数据，二维数组：newArr[0]：资源数，newArr[1]：请求数，newArr[x]：每条url次数
let newArr = [];
// 日期汇总
let dayList = [];
// 链接汇总
let urlList = [];
// 以第一个文件为基础
let baseExcel = datas[0];
for(let rowNum = 0, len = baseExcel.length; rowNum < len; rowNum++) {
    let cellArr = baseExcel[rowNum];
    if (rowNum !== 0) {
        // 源文件url固定在表格第1列
        let urlVal = cellArr[0];
        if (!urlVal) {
            continue
        }
        cellArr.length = dayList.length + 1; // 防止末尾单元格为空
        if (urlVal.substring(0,4) === 'http') {
            newArr.push(cellArr);
            urlList.push(urlVal);
        } else if (urlVal.indexOf('资源') != -1) {
            newArr.unshift(cellArr);
            urlList.unshift(urlVal);
        } else if (urlVal.indexOf('请求') != -1) {
            newArr.unshift(cellArr);
            urlList.unshift(urlVal);
        }
    } else {
        // 源文件日期在表格第一行,从第2个单元格开始
        dayList = cellArr.slice(1);
    }
}

// 把剩余文件的数据插入
for (let n = 1,len = datas.length; n < len; n++) {
    let excel = datas[n];
    let insertRow = 0;//拆入到第几行
    // 遍历行
    for(let rowNum = 0, len = excel.length; rowNum < len; rowNum++) {
        let totalCol = excel[0].length; // 新文件的列数
        let cellArr = excel[rowNum];
        if (rowNum !== 0) {
            let urlVal = cellArr[0];
            if(!urlVal) {
                continue;
            }
            insertRow = urlList.indexOf(urlVal);
            if (insertRow > -1) {
                // 已有链接
                // 防止前一个文件末尾单元格为空；或前一个文件无链接
                newArr[insertRow].length = dayList.length + 1 - (totalCol - 1);
                newArr[insertRow] = newArr[insertRow].concat(cellArr.slice(1));
            } else {
                // 新链接
                urlList.push(urlVal);
                let emptyArr = []; // 需要置空的数组
                emptyArr.length = dayList.length - (totalCol - 1);
                let insertArr = [urlVal].concat(emptyArr).concat(cellArr.slice(1));
                newArr.push(insertArr);
            }
        } else {
            dayList = dayList.concat(cellArr.slice(1));
        }
    }
}

// TODO 按照日期排序 格式：2017-01-05
/*for (index in dayList) {
    if (dayList[index].indexOf('-') == -1 && dayList[index].indexOf('/') == -1) {
        // dayList[index]
    }
    console.log(dayList[index])
    let oDate = new Date(dayList[0])
    let nDate = new Date('2017-01-05')
    console.log(oDate)
    console.log(nDate)
    break
}*/

dayList.unshift('')
newArr.unshift(dayList)

//生成excel
let newFile = xlsx.build([{name: '汇总', data: newArr}]);
fs.writeFileSync('汇总.xlsx', newFile, 'binary');

let finishTime = new Date();
finishTime.getTime();
let timeConsumption = finishTime - startTime;
console.log('完成，耗时' + timeConsumption + 'ms');