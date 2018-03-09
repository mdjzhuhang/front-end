class StatisticXlsx{
    constructor(folderLink) {
        this.folderLink = folderLink;
        this.xlsx = require('node-xlsx');
        this.fs = require('fs');
        this.allLink = [];
        this.normalLink = [];
        this.unNormalLink = [];
        this.init();
    }

    init() {
        let datas = this.getDatas();
        let mergeArr = this.merageExcel(datas);
        let tempArr = this.changeRowCol(mergeArr);
        let dateSortArr = this.bubbleSort(tempArr);
        this.allLink =  this.changeRowCol(dateSortArr);
        this.filterLink(this.allLink);
        let resultArr = [
            {name: '汇总', data: this.allLink},
            {name: '正常链接', data: this.calcCount(this.normalLink)},
            {name: '异常链接', data: this.calcCount(this.unNormalLink)}
        ];
        this.creatExcel(resultArr, '结果');
    }

    getDatas() {
        // 获取文件名
        let excelnames = this.fs.readdirSync(this.folderLink);

        // 获得的数据，三维数组：文件--行--单元格
        let datas = [];
        for (let i = 0, len = excelnames.length; i < len; i++) {
            if (excelnames[i].indexOf('xls') != -1) {
                // 读取excel的内容
                let file = this.xlsx.parse(this.folderLink + excelnames[i]);
                datas.push(file[0].data);
            }
        }
        if (datas.length == 0) {
            throw new Error('无xls或xlsx文件');
        }
        return datas;
    }

    merageExcel(datas) {
        // let datas = this.getDatas();
        // 目标数据，二维数组：newArr[0]：资源数，newArr[1]：请求数，newArr[x]：每条url次数
        let newArr = [];
        // 日期汇总
        let dayList = [];
        // 链接汇总
        let urlList = [];
        // 以第一个文件为基础
        let baseExcel = datas[0];
        for (let rowNum = 0, len = baseExcel.length; rowNum < len; rowNum++) {
            let cellArr = baseExcel[rowNum];
            if (rowNum !== 0) {
                // 源文件url固定在表格第1列
                let urlVal = cellArr[0];
                if (!urlVal) {
                    continue
                }
                cellArr.length = dayList.length + 1; // 防止末尾单元格为空
                if (urlVal.substring(0, 4) === 'http') {
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
        for (let n = 1, len = datas.length; n < len; n++) {
            let excel = datas[n];
            let insertRow = 0;//拆入到第几行
            // 遍历行
            for (let rowNum = 0, len = excel.length; rowNum < len; rowNum++) {
                let totalCol = excel[0].length; // 新文件的列数
                let cellArr = excel[rowNum];
                if (rowNum !== 0) {
                    let urlVal = cellArr[0];
                    if (!urlVal) {
                        continue;
                    }
                    insertRow = urlList.indexOf(urlVal);
                    if (insertRow > -1) {
                        // 已有链接
                        // 防止前一个文件末尾单元格为空；或前一个文件无链接
                        newArr[insertRow].length = dayList.length + 1 -
                            (totalCol - 1);
                        newArr[insertRow] = newArr[insertRow].concat(
                            cellArr.slice(1));
                    } else {
                        // 新链接
                        urlList.push(urlVal);
                        let emptyArr = []; // 需要置空的数组
                        emptyArr.length = dayList.length - (totalCol - 1);
                        let insertArr = [urlVal].concat(emptyArr).
                            concat(cellArr.slice(1));
                        newArr.push(insertArr);
                    }
                } else {
                    dayList = dayList.concat(cellArr.slice(1));
                }
            }
        }

        dayList.unshift('');
        newArr.unshift(dayList);
        return newArr;
    }

    changeRowCol(arr) {
        let arr2 = [];
        for(let i = 0, len = arr[0].length; i < len; i++){
            arr2[i] = [];
        }
        for(let i = 0, len = arr.length; i < len; i++){
            for(let j = 0, len = arr[i].length; j < len; j++){
                arr2[j][i] = arr[i][j];
            }
        }
        return arr2;
    }

    bubbleSort(arr) {
        let array = arr.slice(1)
        for(let i = array.length - 1; i > 1; i--){
            for(let j = 0; j < i; j++){
                if(array[j][0] > array[j+1][0]){
                    let temp = array[j];
                    array[j] = array[j+1];
                    array[j+1] = temp;
                }
            }
        }
        array.unshift(arr[0]);
        return array;
    }

    filterLink(arr) {
        for(let i = 3, len = arr.length; i < len; i++){
            let str = arr[i][0];
            if (str.indexOf('.png') > 0 || str.indexOf('.jpg') > 0 || str.indexOf('.css') > 0 || str.indexOf('.js') > 0){
                this.normalLink.push(arr[i]);
            } else {
                this.unNormalLink.push(arr[i]);
            }
        }
        this.normalLink.unshift(arr[0]);
        this.unNormalLink.unshift(arr[0]);
    }

    calcCount(array) {
        let arr = this.changeRowCol(array);
        arr[0].splice(1, 0, '资源数', '请求数');
        for(let i = 1, len = arr.length; i < len; i++){
            let resourceCount = 0;
            let requestCount = 0;
            for(let j = 1, length = arr[i].length; j < length; j++){
                if(arr[i][j] && arr[i][j] !== 'undefined'){
                    resourceCount++;
                    requestCount += arr[i][j];
                }
            }
            arr[i].splice(1, 0, resourceCount, requestCount);
        }
        return this.changeRowCol(arr);
    }

    creatExcel(data, name) {
        let newFile = this.xlsx.build(data);
        this.fs.writeFileSync(name + '.xlsx', newFile, 'binary');
    }
}

let statisticXlsx = new StatisticXlsx('./dist/');
