const botconfig = require("./botconfig.json");
const Discord = require("discord.js");

const bot = new Discord.Client({disableEveryone: true});
const client = new Discord.Client({disableEveryone: true})


bot.on("ready", async ()  =>{
  console.log(`${bot.user.username} is online!`);
  bot.user.setGame(`Discord with ${client.members} people!`);
});

bot.on('message', msg => {
  if (msg.content === 'hello') {
    msg.reply('Hello!');
  }
});

bot.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;

  let prefix = botconfig.prefix;
  let messageArray = message.content.split(" ");
  let cmd = messageArray[0];
  let args = messageArray.slice(1);

  if(cmd === `${prefix}hola`){
    return message.channel.send("Hello, you're spanish?");
}

  if(cmd === `${prefix}info`){
    let gcon = message.guild.iconURL;
    let serverembed = new Discord.RichEmbed()
    .setColor("#15f153")
    .setThumbnail(gcon)
    .addField("Discord Server Info", "Explain's alot about this discord!")
    .addField("Server Name", message.guild.name)
    .addField("Created On", message.guild.createdAt)
    .addField("You Joined", message.guild.joinedAt)
    .addField("Total Members", message.guild.memberCount)

}

    if(cmd === `${prefix}suggest`){
      let uicon = bot.user.displayAvatarURL;
      let botembed = new Discord.RichEmbed()
      .setColor("#15f153")
      .setThumbnail(uicon)
      .setTitle(`Suggestions`)
      .setFooter(`Hello, I am a footer!`)
      .addField ("You're suggestion has been added,", `${message.author}!`)


    return client.channels.get("496760021665710080").send(botembed);
  }

  if(cmd === `${prefix}wink`){
    return message.channel.send(":wink:");
  }

  if(cmd === `<@496405159308558347>`){
    let bicon = bot.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
    .setColor("#15f153")
    .addField("Current Bot Prefix:", botconfig.prefix)
    .setThumbnail(bicon);

    return message.channel.send(botembed);
  }

  if(cmd === `${prefix}help`){
    let bicon = bot.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
    .setColor("#15f153")
    .setThumbnail(bicon)
    .addField("Bot Commands", "Will show you all commands for the bot!")
    .addField(`${botconfig.prefix}hola`, "! Hola, Amigo")
    .addField(`${botconfig.prefix}help`, "Shows this!")
    .addField(`${botconfig.prefix}info`, "Tells you info about the bot!")
    .addField(`${botconfig.prefix}invite`, "Gives you the invite to the discord bot/guild!")
    .addField(`${botconfig.prefix}suggest`, "Add suggestions to what you think should be added to the custom bot!")
    .addField(`${botconfig.prefix}wink`, ":wink:")
    

    return message.channel.send(botembed);
  }

  if(cmd === `${prefix}invite`){
    let botembed = new Discord.RichEmbed()
    .setColor("#15f153")
    .addField("Bot Invite:", "https://discordapp.com/oauth2/authorize?client_id=496405159308558347&scope=bot&permissions=8")
    .addField("Discord Invite:", "Coming Soon! :wink:")


    return message.channel.send(botembed);
  }

});

bot.login(botconfig.token);
