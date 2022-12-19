module.exports = {
    name: "grouplink",
    alias: ["grplink","linkgc","grouplink","gclink","linkgroup","link"],
    desc: "Link group",
    cool:3,
    react:"✅",
   
        start: async(client, m, { text, prefix, isBotAdmin,mentionByTag}) => {
            if(!isBotAdmin) return m.reply("Make me admin to use this command")
                let response = await client.groupInviteCode(m.chat)
                client.sendText(m.chat, `https://chat.whatsapp.com/${response}`, m, { detectLink: true })
          
            }
    }
