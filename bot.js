const {Client, Attachment} = require('discord.js')
const client = new Client()
const config = require('./config.json')
const path = require('path')
const fs = require('fs')
var ddoong = {}
var ddoongpic = [
    './img/zipge/nope.png',
    './img/zipge/nnope.png',
    './img/zipge/nnnope.png',
    './img/zipge/noodoong.png'
]
var sarang = [
    './img/who/who.png',
    './img/who/sa.png',
    './img/who/rang.png',
    './img/who/hae.png',
    './img/who/yo.png',
    './img/who/ba.png',
    './img/who/am.png'
]

var sarang = async (msg) => { 
    await msg.channel.send(new Attachment(sarang[0]))
    await msg.channel.send("사", new Attachment(sarang[1]))
    await msg.channel.send("랑", new Attachment(sarang[2]))
    await msg.channel.send("해", new Attachment(sarang[3]))
    await msg.channel.send("요", new Attachment(sarang[4]))
    await msg.channel.send(new Attachment(sarang[5]))
    await msg.channel.send(new Attachment(sarang[6]))
}

client.on('ready', () => {
    console.log("디스코드 봇 준비됨")
})

client.on('message', (msg) => {
    if(msg.content === "거기 집게리아 맞죠?"){
        console.log("집게")
        var author = msg.author.toString()
        if(ddoong.author === 1){
            const attachment = new Attachment(ddoongpic[1])
            msg.channel.send("아니요 뚱이라니까요", attachment)
            ddoong.author = 2
        }else if (ddoong.author === 2){
            const attachment = new Attachment(ddoongpic[2])
            msg.channel.send("아니요! 뚱이라니까요!!", attachment)
            ddoong.author = 3
        }else if (ddoong.author === 3){
            const attachment = new Attachment(ddoongpic[3])
            msg.channel.send("뚱이를 사랑하시는 당신께 이 뚱이 누드짤을 드립니다.", attachment)
            ddoong.author = 0
        }else {
            const attachment = new Attachment(ddoongpic[0])
            msg.channel.send("아니요 뚱인데요", attachment)
            ddoong.author = 1
        }
    }
})


client.on('message', (msg) => {
    if (msg.content === "용선이 바보"){
        const attachment = new Attachment("./img/ddungi.jpeg")
        msg.channel.send("저...두...그렇게...생각해요오...궤ㅔ에//", attachment)
    } else if(msg.content === "누구세요?"){
        sarang(msg)
    }
})

client.on('message', (msg) => {
    if(msg.content === '파란색' ||
        msg.content === "노란색" ||
        msg.content === "초록색" ||
        msg.content ===  "주황색" ||
        msg.content === "보라색" ||
        msg.content === "빨간색" ||
        msg.content === "전부다줘"){
        const attachment = new Attachment(`./img/beautyburger/${msg}.png`)
        console.log(`${msg.author.toString()}에게 ${msg}로 답함`)
        console.log(typeof(msg.author.toString()))
        msg.channel.send(attachment)
    }

// client.on('message', (msg) => {
//     if(msg.content === "집게리아 맞죠?"){
//         const attachment = new Attachment('./img/zipge/nope.png')
//         msg.channel.send("아니요 뚱인데요", attachment)

//     }else if(msg.content === "거기 집게리아 맞죠?"){
//         const attachment = new Attachment('./img/zipge/nnope.png')
//         msg.channel.send("아니요 뚱이라니까요!!", attachment)
//     }
// })



    // fs.exists(`./img/beautyburger/${msg}.png`, (exists) => {
    //     if(exists){
    //         console.log("있음")
    //         const attachment = new Attachment(`./img/beautyburger/${msg}.png`)
    //         msg.channel.send(attachment)
    //     }else{
    //         msg.channel.send("그런거읎다")
    //     }
    // })
})

client.login(config.token)