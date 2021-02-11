const Discord = require("discord.js");

const bot = new Discord.Client();
const prefix = "$";

let users = [];

bot.once("ready", () => {
  console.log("Bot Ready.");
  const guild = bot.guilds.cache.get("Server ID Here");
});

bot.on("message", (message) => {
  const messageSender = message.member;

  if (messageSender.roles.cache.has("Role ID Here")) {
    message.channel.send("SILENCE FOOL!");
    setTimeout(() => {
      messageSender.ban();
    }, 7000);
  }

  if (!message.content.startsWith(prefix) || message.author.bot) return;
  const args = message.content.slice(prefix.length).split(/ +/);
  const command = args.shift().toLowerCase();

  if (command === "silence") {
    const target = message.mentions.users.first();
    if (target) {
      message.channel.send(
        `You have been silenced noob. Your free speech is mine. Welcome to China :)`
      );

      setTimeout(() => {
        const targetMember = message.guild.members.cache.get(target.id);
        targetMember.ban();
      }, 5000);

      setTimeout(() => {
        message.channel.send(`Be gone thot`);
      }, 2000);
    } else {
      message.channel.send(`You must pick a person to silence`);
    }
  }
});

bot.login("Bot Token Here");
