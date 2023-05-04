import "./App.css";

import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import Modal from "./Modal";
import { useState } from "react";

// rfc + enter to use this starter code.
// can use <> to make a fragment instead of doing a div

export default function App() {
  const [showModal, setShowModal] = useState(false);
  const [modalImg, setModalImg] = useState("");

  function imageClick(image) {
    setShowModal(!showModal);
    setModalImg(image);
  }

  return (
    <div className="App">
      <Header />
      <Main imageClick={imageClick} />
      <Footer />
      {showModal && <Modal modalImg={modalImg} imageClick={imageClick} />}
    </div>
  );
}
