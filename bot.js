const TelegramBot = require("node-telegram-bot-api");

const TOKEN = process.env.BOT_TOKEN;

const bot = new TelegramBot(TOKEN, { polling: true });

const WEBAPP_URL = "https://YOUR-WEBAPP-LINK";

bot.onText(/\/start/, (msg) => {
  bot.sendMessage(msg.chat.id, "🐟 Welcome to Fish Cash!", {
    reply_markup: {
      keyboard: [[
        { text: "🎮 Play Fish Cash", web_app: { url: WEBAPP_URL } }
      ]],
      resize_keyboard: true
    }
  });
});

bot.on("message", (msg) => {
  if (msg.text === "hi") {
    bot.sendMessage(msg.chat.id, "Bot is working ✅");
  }
});
