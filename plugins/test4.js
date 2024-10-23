import { default as makeWASocket } from '@whiskeysockets/baileys';

const handler = async (m, { conn }) => {
  try {
    const documents = [
      {
        title: "Grupo 1",
        url: "https://chat.whatsapp.com/J9gyFJLbhVIJXaUZlpo8Xt",
        fileName: "Grupo 1 - WhatsApp"
      },
      {
        title: "Grupo 2",
        url: "https://chat.whatsapp.com/J9gyFJLbhVIJXaUZlpo8Xt",
        fileName: "Grupo 2 - WhatsApp"
      },
      {
        title: "Grupo 3",
        url: "https://chat.whatsapp.com/LJKcR8QBJgu37bVFWuhRVn",
        fileName: "Grupo 3 - WhatsApp"
      },
      {
        title: "𝑐𝑎𝑛𝑎𝑙 𝑜𝑓𝑖𝑐𝑖𝑎𝑙 ",
        url: "https://whatsapp.com/channel/0029VacDy0R6hENqnTKnG820",
        fileName: "𝑐𝑎𝑛𝑎𝑙 𝑜𝑓𝑖𝑐𝑖𝑎𝑙  - 𝑊𝒉𝑎𝑡𝑠𝐴𝑝𝑝 "
      }
    ];

    for (const doc of documents) {
      const buttonMessage = {
        document: {
          url: doc.url,
        },
        mimetype: 'application/pdf',
        fileName: doc.fileName,
        caption: `📄 ${doc.title} - 𝑢𝑛𝑒𝑡𝑒 𝑎 𝑙𝑜𝑠 𝑔𝑟𝑢𝑝𝑜𝑠 𝑜𝑓𝑖𝑐𝑖𝑎𝑙𝑒𝑠 `,
        buttons: [
          { buttonId: `link_${doc.url}`, buttonText: { displayText: `Unirme a ${doc.title}` }, type: 1 }
        ],
        headerType: 1
      };

      await conn.sendMessage(m.chat, buttonMessage, { quoted: m });
    }
  } catch (error) {
    console.error("Error enviando el mensaje:", error);
    conn.reply(m.chat, `❌️ *OCURRIÓ UN ERROR:* ${error.message}`, m);
  }
};

handler.command = ['test4'];

export default handler;
