import { useState } from "react";
import "../HornedBeast/HornedBeast.css";

export default function HornedBeast({ beast, handleModal }) {
  const [votes, setVotes] = useState(0);

  function handleClick() {
    setVotes(votes + 1);
  }

  function handleDeClick() {
    setVotes(votes - 1);
    if (votes === 0) {
      setVotes(0);
    } else {
      setVotes(votes - 1);
    }
  }

  return (
    <div className="beastCard">
      <h2>{beast.title}</h2>
      <img className="beastImage" src={beast.image_url} alt={beast.title} onClick={() => handleModal(beast)} />
      <p>{beast.description}</p>
      <div className="beastButton">
        <p onClick={handleClick}>💚</p>
        <p onClick={handleDeClick}>🖤{votes} </p>
      </div>
    </div>
  );
}
