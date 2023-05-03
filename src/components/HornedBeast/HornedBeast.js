import { useState } from "react";

export default function HornedBeast({ title, imageUrl, description }) {
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
      <img src={imageUrl} alt={description} title={title} />
      <p>{description}</p>
      <p onClick={handleClick}>©={votes} </p>
      <p onClick={handleDeClick}>ƒ={votes} </p>
    </div>
  );
}
