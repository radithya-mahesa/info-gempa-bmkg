const telegramBot = require('node-telegram-bot-api')
const { error } = require('console')
const { infoGempa } = require('./gempa')
const alive = require('./alive')
require('dotenv').config()

alive()
const botToken = process.env.TOKEN

if(!botToken){
    throw new error('token not found')
} else {
    console.log('Bot Alive✅')
}

const options = { polling: true }
const raditbot = new telegramBot(botToken,options)
raditbot.on("message", (reply) => {
  const txtLog = `'${reply.from.username} (id: ${reply.from.id})' Just say:\n"${reply.text}"\n`
  console.log(txtLog)
})

const gempa = '/gempa -> lihat informasi gempa terbaru'
raditbot.onText(/\/start/, (reply) => {
    raditbot.sendMessage(reply.from.id, `Yahalo @${reply.from.username} !!!✨\nAku adalah sebuah bot sederhana yang diciptakan @RadithyaMS\n\nSo, ini fitur yang bisa kamu pakai di bot ini! 👇\n${gempa}`)
})

raditbot.onText(/\/gempa/, (reply) => {
    infoGempa(raditbot, reply)
})

raditbot.on("polling_error", console.log);