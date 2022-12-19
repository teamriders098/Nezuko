     module.exports = {
    name: "joingroup",
    alias: ["join","joingrp","joingc","gcjoin","grpjoin","groupjoin"],
    desc: "Link group",
    cool:3,
    react:"✅",
   
        start: async(client, m, { conn, args}) => {        
	let id = m.chat
	    if (/^[0-9]{5,16}-[0-9]+@g\.us$/.test(args[0])) id = args[0]
      
        let groupMetadata = await client.groupMetadata(id)
        if (!groupMetadata) throw 'groupMetadata is undefined'
        if (!'participants' in groupMetadata) throw 'participants is not defined'
        let me = groupMetadata.participants.find(user => user.id === client.user.jid)
        if (!me) throw 'The bot is not in that group'
        if (me.admin !== 'admin') throw 'I m not an admin T_T'
        m.reply('https://chat.whatsapp.com/' + await conn.groupInviteCode(id))

}

    }
