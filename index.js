const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

let users = {};

function getUser(id){
  if(!users[id]){
    users[id] = { fc: 100, gc: 10 };
  }
  return users[id];
}

app.get("/", (req,res)=>{
  res.send("🐟 Fish Cash API running");
});

// user
app.post("/user", (req,res)=>{
  const { id } = req.body;
  res.json(getUser(id));
});

// fish game
app.post("/fish", (req,res)=>{
  const { id, bet, currency } = req.body;

  let u = getUser(id);

  if(currency === "fc" && u.fc < bet)
    return res.json({ error:"no fc" });

  if(currency === "gc" && u.gc < bet)
    return res.json({ error:"no gc" });

  let win = Math.random() > 0.5;

  let result = win
    ? ["🐟 Карась","🐠 Короп","🦈 Щука"][Math.floor(Math.random()*3)]
    : "🗑️ Сміття";

  if(currency === "fc"){
    u.fc -= bet;
    if(win) u.fc += bet * 1.5;
  } else {
    u.gc -= bet;
    if(win) u.gc += bet * 1.5;
  }

  res.json({
    win,
    result,
    fc: u.fc,
    gc: u.gc
  });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, ()=>{
  console.log("API running on", PORT);
});
