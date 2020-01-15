const fs = require('fs');
const path = require('path');
const BusBoy = require('busboy');

/**
 * 获取上传文件的后缀名
 * @param  {string} fileName 获取上传文件的后缀名
 * @return {string}          文件后缀名
 */
function getFileSuffixName(fileName) {
    const nameList = fileName.split('.');
    return nameList[nameList.length - 1];
}


/**
 * 同步创建文件目录
 * @param { string } filePath 文件上传路径
 * @return { boolean }         返回结果
 */
function mkdirPath(dirname) {
    if (fs.existsSync(dirname)) {
        return true;
    }
    fs.mkdirSync(dirname)
    return true;
}

/**
 * 同步上传文件
 * @param { ctx } Object 上下文对象
 * @param { options } Object 配置参数
 * @return { promise }   返回上传结果的promise
 */
module.exports = (ctx, options) => {
    return new Promise((resolve, reject) => {
        let req = ctx.req;
        let res = ctx.res;
        let busboy = new BusBoy({ headers: req.headers });
        let result = {
            success: false,
            path: null
        }

        busboy.on('file', (fieldname, file, filename, encoding, mimetype) => {
            console.log('File [' + fieldname + ']: filename: ' + filename + 'encoding: ' + encoding + 'mimetype: ' + mimetype);
            let fileName = Math.random().toString(32).substr(2) + '.' + getFileSuffixName(filename);
            // let filePath = mkdirPath(options.path) && (options.path + '/' + filename);
            let filePath = filename;
            file.on('data', data => {
                console.log('File [' + filename + '] got ' + data.length + ' bytes')
            });
            file.on('end', () => {
                console.log('File [' + filename + '] finished ');
                result.success = true;
                result.path = filePath;
                resolve(result)
            });
            file.on('error', () => {
                reject(result);
            });
            // 解析表单中其他字段信息
            busboy.on('field', function(fieldname, val, fieldnameTruncated, valTruncated, encoding, mimetype) {
                // console.log('表单字段数据 [' + fieldname + ']: value: ' + inspect(val));
                // result.formData[fieldname] = inspect(val);
            });

            // 解析结束事件
            busboy.on('finish', function() {
                console.log('文件上传结束')
                resolve(result)
            });

            // 解析错误事件
            busboy.on('error', function(err) {
                console.log('文件上传出错')
                reject(result)
            });
            file.pipe(fs.createWriteStream(filePath));
        })
        req.pipe(busboy);
    })
}