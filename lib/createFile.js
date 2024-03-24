const fs = require('fs')
const path = require('path');


// 检查是否已存在 config.json 文件，若不存在則創立此文件
function CreateConfig() {
    if (!fs.existsSync('config.json')) {
        const ConfigJson = {
            "ip": "mcfallout.net",
            "username": "Bot1",
            "whitelist": [
                "Player"
            ]
        };
        fs.writeFileSync('config.json', JSON.stringify(ConfigJson, null, 2));
        console.log("config.json已建立")
    }
}




function CreateLog() {
    // 檢查資料夾是否存在
    if (!fs.existsSync('log')) {
        // 如果不存在則建立一個名為log的資料夾並在其中建立名為latest.log的檔案
        fs.mkdirSync('log');
        fs.writeFileSync(`log/latest.log`, '');
        console.log("log資料夾已建立")
    }
}

function CreateToken() {
    // 检查是否已存在 token.json 文件，若不存在則創立此文件
    if (!fs.existsSync('token.json')) {
        const tokenJson = {
            token: "輸入你的token"
        };
        fs.writeFileSync('token.json', JSON.stringify(tokenJson, null, 2));
        console.log("token.json已建立")
    }
}


function getCurrentTimestamp() {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const date = String(now.getDate()).padStart(2, '0');
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    return `[${year}/${month}/${date}, ${hours}:${minutes}]`;
}

function logToFile(message) {
    const timestamp = getCurrentTimestamp();
    const logLine = `${timestamp} ${message}\n`;
    const logDirectory = 'log'; // log文件夾名稱
    fs.appendFile(path.join(logDirectory, 'latest.log'), logLine, () => { });
}

module.exports = { CreateLog, CreateConfig, logToFile }