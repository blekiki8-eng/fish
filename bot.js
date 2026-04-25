const TelegramBot = require("node-telegram-bot-api");

const TOKEN = process.env.BOT_TOKEN;

const bot = new TelegramBot(TOKEN, { polling: true });

const WEBAPP_URL = "https://YOUR-FRONTEND-LINK";

// /start — ВАЖЛИВО
bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;

  bot.sendMessage(chatId, "🐟 Welcome to Fish Cash!", {
    reply_markup: {
      keyboard: [
        [
          {
            text: "🎮 Open Fish Cash",
            web_app: { url: WEBAPP_URL }
          }
        ]
      ],
      resize_keyboard: true
    }
  });
});

// тест
bot.on("message", (msg) => {
  if (msg.text && msg.text.toLowerCase() === "hi") {
    bot.sendMessage(msg.chat.id, "Bot is alive ✅");
  }
});
