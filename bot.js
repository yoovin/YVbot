const {Client, Attachment, RichEmbed} = require('discord.js')
const client = new Client()
const config = require('./config.json')
const commend = require('./cmd/commend')
const commendjson = require('./cmd/commend.json')

var ddoong = {}

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

var pro1 = (func) => {
    return new Promise((res, rej)=>{
        res(func)
    })
}
var proSarang = (msg) => {
    pro1 = new Promise ((res, rej) => {
        if (msg){
        res(console.log("pro실행"))
        }else{
            rej("pro실행안댐")
        }
    })
    pro1
    .then(msg.channel.send(new Attachment(sarang[0])))
    .then(msg.channel.send("사", new Attachment(sarang[1])))
    .then(msg.channel.send("랑", new Attachment(sarang[2])))
    .then(msg.channel.send("해", new Attachment(sarang[3])))
    .then(msg.channel.send("요", new Attachment(sarang[4])))
    .then(msg.channel.send(new Attachment(sarang[5])))
    .then(msg.channel.send(new Attachment(sarang[6])))
}


client.login(config.token)

client.on('ready', () => {
    console.log("디스코드 봇 준비됨")
})

client.on('message', (msg) => {
    if(commendjson.hasOwnProperty(msg.content)){
        commend[commendjson[msg.content]](msg, ddoong)
    }
})

client.on('message', (msg) => {
    if(msg.content === "$comein"){
        msg.member.voiceChannel.join()
        .then(connection => {
            connection.playFile('./music/무릉.mp3').setVolume(0.1)
        })
    }else if(msg.content === "$out"){
        msg.member.voiceChannel.leave()
    }else if(msg.content === "$youtube"){
        msg.channel.send("원하는 url")
    }
})

