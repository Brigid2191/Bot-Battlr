import React, { useEffect, useState } from "react";
import BotCollection from "./BotCollection";
import YourBotArmy from "./YourBotArmy";
import "../App.css";

function App() {
  const [bots, setBots] = useState([]);
  const [army, setArmy] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8001/bots")
      .then((res) => res.json())
      .then(setBots);
  }, []);

  function enlistBot(bot) {
    if (!army.find(b => b.id === bot.id)) {
      setArmy([...army, bot]);
    }
  }

  function releaseBot(bot) {
    setArmy(army.filter(b => b.id !== bot.id));
  }

  function dischargeBot(bot) {
    fetch(`http://localhost:8001/bots/${bot.id}`, { method: "DELETE" });
    setArmy(army.filter(b => b.id !== bot.id));
    setBots(bots.filter(b => b.id !== bot.id));
  }

  return (
    <div className="App">
      <YourBotArmy bots={army} releaseBot={releaseBot} dischargeBot={dischargeBot} />
      <BotCollection bots={bots} enlistBot={enlistBot} />
    </div>
  );
}

export default App;
