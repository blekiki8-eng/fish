const TelegramBot = require("node-telegram-bot-api");

// беремо токен з Variables (Railway)
const TOKEN = process.env.BOT_TOKEN;

// створюємо бота
const bot = new TelegramBot(TOKEN, { polling: true });

// 🔴 ВСТАВ СЮДИ СВІЙ WEBAPP ЛІНК (https)
const WEBAPP_URL = "https://your-webapp-url.com";

// /start команда
bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;

  bot.sendMessage(chatId, "🎣 Велком до риболовлі!", {
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

// тест — щоб бачити що бот живий
bot.on("message", (msg) => {
  if (msg.text === "ping") {
    bot.sendMessage(msg.chat.id, "pong ✅");
  }
});
