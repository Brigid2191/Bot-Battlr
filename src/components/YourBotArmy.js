import React from "react";
import BotCard from "./BotCard";

function YourBotArmy({ bots, releaseBot, dischargeBot }) {
  return (
    <div className="your-bot-army">
      {bots.map(bot => (
        <BotCard
          key={bot.id}
          bot={bot}
          handleClick={() => releaseBot(bot)}
          handleDischarge={() => dischargeBot(bot)}
        />
      ))}
    </div>
  );
}

export default YourBotArmy;
