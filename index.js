const { Client, GatewayIntentBits } = require("discord.js");
require("dotenv").config();

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildMessages,
  ],
});

client.once("ready", () => {
  console.log(`✅ Logged in as ${client.user.tag}`);
});

client.on("guildMemberAd d", async (member) => {
  // Channel ID where you want to send welcome message
  const channelId = "1431165075431096363";

  const channel = member.guild.channels.cache.get(channelId);
  if (!channel) return console.log("Channel not found!");

  const memberCount = member.guild.memberCount;

  channel.send(
    `👋 Welcome to the server, ${member}! We're glad to have you here! 🎉 
    you're the member **#${memberCount}**`
  );
});

client.login(process.env.TOKEN);
