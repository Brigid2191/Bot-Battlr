import React from "react";

function BotCard({ bot, handleClick, handleDischarge }) {
  return (
    <div className="bot-card" onClick={handleClick}>
      <img src={bot.avatar_url} alt={bot.name} />
      <h3>{bot.name}</h3>
      <p><em>{bot.catchphrase}</em></p>
      <p>Class: {bot.bot_class}</p>
      <p>Health: {bot.health} | Damage: {bot.damage} | Armor: {bot.armor}</p>
      {handleDischarge && (
        <button onClick={(e) => { e.stopPropagation(); handleDischarge(); }}>x</button>
      )}
    </div>
  );
}

export default BotCard;
