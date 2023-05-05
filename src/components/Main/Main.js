import HornedBeast from "../HornedBeast/HornedBeast";
import "../Main/Main.css";

export default function Main({ beastData, handleModal }) {
  return (
    <main className="beastCard">
      {beastData.map((beast) => {
        return <HornedBeast beast={beast} handleModal={handleModal} />;
      })}
    </main>
  );
}

// function update state on the app.js
// create selectedbeast
