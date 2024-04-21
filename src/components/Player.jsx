import { useState } from "react";

export default function Player() {
  const [playerName, setPlayerName] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handlePlayerName = (e) => {
    setSubmitted(false)
    setPlayerName(e.target.value);
  };

  const handleClick = () => {
    setSubmitted(true);
  }

  return (
    <section id="player">
      <h2>Welcome {submitted ? playerName : 'Unknown Entity ...'}</h2>
      <p>
        <input type="text" onChange={handlePlayerName} />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
