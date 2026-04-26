const TelegramBot = require("node-telegram-bot-api");

// 🔴 ВСТАВ СЮДИ СВІЙ ТОКЕН
const TOKEN = "YOUR_BOT_TOKEN";

const bot = new TelegramBot(TOKEN, { polling: true });

// 🔴 ВСТАВ СЮДИ СВІЙ WEB APP URL (ОБОВʼЯЗКОВО HTTPS)
const WEBAPP_URL = "https://your-site.com";

bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;

  bot.sendMessage(chatId, "🐟 Fish Cash", {
    reply_markup: {
      keyboard: [
        [
          {
            text: "🎮 Відкрити гру",
            web_app: { url: WEBAPP_URL }
          }
        ]
      ],
      resize_keyboard: true
    }
  });
});

// тест щоб перевірити що бот живий
bot.on("message", (msg) => {
  if (msg.text === "hi") {
    bot.sendMessage(msg.chat.id, "Бот працює ✅");
  }
});
