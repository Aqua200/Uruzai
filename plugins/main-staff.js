let handler = async (m, { conn, command, usedPrefix }) => {
let staff = `🚩 *EQUIPO DE AYUDANTES*
🍟 *Bot:* ${global.botname}
✨️ *Versión:* ${global.vs}

👑 *Propietario:*

• Diamond
🍟 *Rol:* Propietario
🚩 *Número:* https://wa.me/qr/QUQOO62T4KCFC1
✨️ *GitHub:* No Disponible :)

🌸  *Colaboradores:*

•
🍟 *Rol:* Contribuidor
🚩 *Número:* 

• 
🍟 *Rol:* Contribuidor
🚩 *Número:* 

• 
🍟 *Rol:* 
🚩 *Número:* 
`
await conn.sendFile(m.chat, icons, 'yaemori.jpg', staff.trim(), fkontak, true, {
contextInfo: {
'forwardingScore': 200,
'isForwarded': false,
externalAdReply: {
showAdAttribution: true,
renderLargerThumbnail: false,
title: `🥷 Developers 👑`,
body: `🚩 Staff Oficial`,
mediaType: 1,
sourceUrl: redes,
thumbnailUrl: icono
}}
}, { mentions: m.sender })
m.react(emoji)

}
handler.help = ['staff']
handler.command = ['colaboradores', 'staff']
handler.register = true
handler.tags = ['main']

export default handler
