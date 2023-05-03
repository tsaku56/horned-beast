import { useState } from "react";
import "../HornedBeast/HornedBeast.css";

export default function HornedBeast({ title, imageURL, description }) {
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
    <div>
      <h2>{title}</h2>
      <img className="beastImage" src={imageURL} alt={description} title={title} />
      <p>{description}</p>
      <div className="beastButton">
        <p onClick={handleClick}>💚</p>
        <p onClick={handleDeClick}>🖤{votes} </p>
      </div>
    </div>
  );
}
