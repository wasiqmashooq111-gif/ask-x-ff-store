const { Telegraf } = require("telegraf");

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.start((ctx) => {
  ctx.reply(
    "🔥 Welcome to ASK X FF STORE 💀\n\nBot is online successfully!"
  );
});

bot.launch();

console.log("Bot Started...");
