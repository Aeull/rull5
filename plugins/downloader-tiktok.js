let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
if (!args[0]) throw 'Uhm..url nya mana?'

let res = await fetch(`https://botcahx-rest-api.herokuapp.com/api/dowloader/tikok?url=${args[0]}`)
if (!res.ok) throw await res.text()
let json = await res.json()
if (!json.status) throw json
let { video, description, username } = json.result
await conn.sendFile(m.chat, video, 'video.mp4', '*「 T I K T O K 」*
                 ████████▀▀▀████
                 ████████────▀██
                 ████████──█▄──█
                 ███▀▀▀██──█████
                 █▀──▄▄██──█████
                 █──█████──█████
                 █▄──▀▀▀──▄█████
                 ███▄▄▄▄▄███████
──────────────────────────*

*📛Nickname:* ${nickname}
*📒Description:* ${description}', m, true, { contextInfo: { externalAdReply :{
      showAdAttribution: true,
  }}})
}

handler.help = ['tiktok <url>']
handler.tags = ['downloader']

handler.command = /^(tiktok|tt)$/i
handler.limit = true
module.exports = handler
