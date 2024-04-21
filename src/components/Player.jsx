import { useState, useRef } from "react";

export default function Player() {
  const player = useRef()

  const [playerName, setPlayerName] = useState("");
  // const [submitted, setSubmitted] = useState(false);

  // const handlePlayerName = (e) => {
  //   setSubmitted(false)
  //   setPlayerName(e.target.value);
  // };

  const handleClick = () => {
    setPlayerName(player.current.value);
  }

  return (
    <section id="player">
      <h2>Welcome {playerName ?? 'Unknown Entity ...'}</h2>
      <p>
        <input type="text" ref={player} />
        <button onClick={handleClick}>Set Name</button>
      </p>
    </section>
  );
}
