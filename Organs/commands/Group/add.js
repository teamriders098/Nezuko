require ('../../../settings')
module.exports = {
	name: "add",
	alias: ["add","tapak"],
	usage:`${prefa}add @tag/quote`,
	desc: "add Member from group",
	category: "Group",
	react:"✅",
	start: async(client, m, { text, prefix, isBotAdmin,isAdmin,mentionByTag}) => {
		if(!isAdmin) return client.sendMessage(m.from,{text:"This is admin only command"},{quoted:m})
		if(!isBotAdmin) return m.reply("Make me admin to use this command")
		const mention= await mentionByTag
		if(!isAdmin) return client.sendMessage(m.from,{text:"This is admin only command"},{quoted:m})
		let users = await  m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		if (!users) return m.reply("❌ Couldn't find any userID in context")
			await client.groupParticipantsUpdate(m.from, [users], "add")
			await client.sendMessage(m.from,{text:`Successfully added`},{quoted:m})
	},
    
}
