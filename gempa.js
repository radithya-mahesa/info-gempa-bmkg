const axios = require('axios')

const infoGempa = async (raditbot, reply) =>{
     const GEMPA_ENDPOINT = 'https://data.bmkg.go.id/DataMKG/TEWS/'
    const api = await axios.get/*fetch*/(GEMPA_ENDPOINT + "autogempa.json")

    const { 
        Infogempa: { 
        gempa: {
            Tanggal, 
            Jam, 
            Magnitude, 
            Coordinates,
            Lintang, 
            Bujur, 
            Kedalaman, 
            Dirasakan, 
            Potensi, 
            Shakemap
        } 
        } 
    } = api.data;//await api.json()

    const BMKGImage = GEMPA_ENDPOINT + Shakemap
    
    const resultText = `
Waktu: ${Tanggal} | ${Jam}
Besaran: ${Magnitude} SR
Kordinat: ${Coordinates}
Lokasi: ${Lintang} | ${Bujur}
Kedalaman: ${Kedalaman}
Dirasakan: ${Dirasakan}
Potensi: ${Potensi}`

    raditbot.sendPhoto(reply.from.id, BMKGImage, {
        caption: resultText,
        reply_to_message_id: reply.message_id
    })

    raditbot.sendMessage(reply.from.id, `Halo @${reply.from.username}! ini Informasi Gempa Untukmu`)
}

module.exports = { infoGempa }
