const mineflayer = require('mineflayer') // 讀取mineflayer模塊
const { Vec3 } = require('vec3');
const fs = require('fs');
const command = require('./commands/basicCommand')
const file = require('./lib/createFile')
file.CreateConfig()
const config = require(`${process.cwd()}/config.json`) // 獲得config.json資料
let bot
const LoginOption = {
    host: config.ip, // 伺服器IP
    username: config.username, // 任意英文數字
    password: "",
    auth: 'microsoft',
};

let data = {
    "stationName": "Bot",
    "stationWarp": "example",
    "stationServer": 1,
    "offset": {
        "N": [0, 1, -3],
        "S": [0, 1, 3],
        "W": [-3, 1, 0],
        "E": [3, 1, 0],
        "bN": [0, 1, -2],
        "bS": [0, 1, 2],
        "bW": [-2, 1, 0],
        "bE": [2, 1, 0]
    },
    "overfull": [270, 24, -241, "E", "bE"],
    "materials": []
};

function connect() {

    bot = mineflayer.createBot(LoginOption)


    bot.once('spawn', async (username, message) => {
        console.log(`[資訊] ${bot.player.username}已上線`)
    })

    //斷線自動重連
    bot.once('end', () => {
        console.log(`[資訊] 客戶端與伺服器斷線 ，10秒後將會自動重新連線...`)
        bot.removeAllListeners()
        setTimeout(function () {
            connect();
        }, 10000)
    });
    bot.once('error', (reason) => {
        console.error(reason, "\n[資訊] 客戶端發生錯誤 ，10秒後將會自動重新連線...")
        bot.removeAllListeners()
        setTimeout(function () {
            connect();
        }, 10000)
    })


    bot.on("messagestr", async (message, messagePosition, jsonMsg, sender, verified) => {
        console.log(jsonMsg.toAnsi())
        file.logToFile(message)
        command.tp(bot, message, config.whitelist); command.cmd(bot, message, config.whitelist);

        config.whitelist.forEach(async (playername) => {
            if (typeof message === 'string') {
                message = message.split(' ');
            }

            if (message[0].indexOf(playername) !== -1) {

                switch (message[3]) {

                    case 'generating':
                        await generatingFile(message)
                }
            }
        })
    })


}

async function generatingFile(message) {
    let boxMode
    let bottomMode
    let y = +message[5]




    if (message[4] - message[7] === 0) { //第一種情況
        if (bot.entity.position.x - message[4] > 1) {
            boxMode = "E"
            bottomMode = "bE"
        }
        if (bot.entity.position.x - message[4] < -1) {
            boxMode = "W"
            bottomMode = "bW"
        }

        let x = +message[4]
        for (let z = +message[6]; z >= +message[9]; z--) {
            block = await bot.world.getBlock(x, y - 5, z)
            materialsPush = [block.name, [x, y, z, boxMode, bottomMode]]
            console.log(materialsPush)
            data.materials.push(materialsPush);
        }
    }

    if (message[6] - message[9] === 0) {
        if (bot.entity.position.z - message[6] > 1) {
            boxMode = "S"
            bottomMode = "bS"
        }
        if (bot.entity.position.z - message[6] < -1) {
            boxMode = "N"
            bottomMode = "bN"
        }



        // while (message[4] - message[7]) {
        //     block = await bot.world.getBlock(new Vec3(x, y - 5, z))
        //     console.log(x)
        //     materialsPush = [block.name, [x, y, z, boxMode, bottomMode]]
        //     console.log(materialsPush)
        //     data.materials.push(materialsPush);
        //     x -= 1
        // }
        let z = +message[6]
        let x = +message[4]

        for (x; x >= (+message[7]); x--) {
            block = await bot.world.getBlock(new Vec3(x, y - 5, z))
            materialsPush = [block.name, [x, y, z, boxMode, bottomMode]]
            console.log(materialsPush)
            data.materials.push(materialsPush);
        }
    }

    fs.writeFileSync('materials.json', JSON.stringify(data, null, 2));


    bot.chat("/r 檔案已生成完成")
}




connect()