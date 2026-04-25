const TelegramBot = require("node-telegram-bot-api");

const TOKEN = "8672090410:AAFpNMdSXJ3NNli4BNLa5sdQ1R4qUN-TzDQ";

const bot = new TelegramBot(TOKEN, { polling: true });

bot.onText(/\/start/, (msg) => {
  bot.sendMessage(msg.chat.id, "🐟 Bot is working!");
});
