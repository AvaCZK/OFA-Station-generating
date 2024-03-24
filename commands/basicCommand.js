function cmd(bot, message, whitelist) {
    whitelist.forEach(player => {
        if ((message.indexOf(player) !== -1) && (message.indexOf("cmd") !== -1) && (message.indexOf("->") !== -1)) {
            bot.chat(message.split("cmd ")[1])
        }
        
    });
}



function tp(bot, message, whitelist) {
    whitelist.forEach(player => {
        if ((message === "[系統] " + player + " 想要傳送到 你 的位置") || (message === "[系統] " + player + " 想要你傳送到 該玩家 的位置")) {
            bot.chat("/tpaccept")
        }
    });
}


module.exports = { cmd, tp }
