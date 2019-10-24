const {Attachment} = require('discord.js')

var ddoongpic = [
    './img/zipge/nope.png',
    './img/zipge/nnope.png',
    './img/zipge/nnnope.png',
    './img/zipge/noodoong.png'
]


var commend = {
    zipge: (msg, ddoong) => {
        var author = msg.author.toString()
        var channel = msg.channel.toString()
        if(ddoong[channel+author] === 1){
            const attachment = new Attachment(ddoongpic[1])
            msg.channel.send("아니요 뚱이라니까요", attachment)
            ddoong[channel+author]++
        }else if (ddoong[channel+author] === 2){
            const attachment = new Attachment(ddoongpic[2])
            msg.channel.send("아니요! 뚱이라니까요!!", attachment)
            ddoong[channel+author]++
        }else if (ddoong[channel+author] === 3){
            const attachment = new Attachment(ddoongpic[3])
            msg.channel.send("뚱이를 사랑하시는 당신께 이 뚱이 누드짤을 드립니다.", attachment)
            ddoong[channel+author] = 0
        }else {
            const attachment = new Attachment(ddoongpic[0])
            msg.channel.send("아니요 뚱인데요", attachment)
            ddoong[channel+author] = 1
        }
    },
    yong: (msg) => {
        const attachment = new Attachment("./img/ddungi.jpeg")
        msg.channel.send("저...두...그렇게...생각해요오...궤ㅔ에//", attachment)
    },

    burger: (msg) => {
        const attachment = new Attachment(`./img/beautyburger/${msg}.png`)
        msg.channel.send(attachment)
    }
}

module.exports = commend