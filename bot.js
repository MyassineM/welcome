   client.on("guildMemberAdd", member => {
        if(member.guild.id === "520256294255591444") {  
  const channel = member.guild.channels.find('id', '527562818363457556'); 
if (!channel) return;
channel.send(`**<@${member.user.id}> __Welcome To Server__ **Arab Shop** 🍂,🌷`)
}}); // by: faisl
