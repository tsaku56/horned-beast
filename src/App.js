import "./App.css";

import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import SelectedBeast from "./components/SelectedBeast/SelectedBeast";
import data from "./data.json";
import { useState } from "react";

// rfc + enter to use this starter code.
// can use <> to make a fragment instead of doing a div

export default function App() {
  const [beastData, setBeastData] = useState(data);
  const [modalShow, setModalShow] = useState(false);
  const [modalData, setModalData] = useState({});

  // function imageClick(image) {
  //   setShowModal(!showModal);
  //   setModalImg(image);
  // }

  function handleModal(beast) {
    setModalShow(!modalShow);
    setModalData(beast);
  }

  function handleFilter(event) {
    const numHorns = parseInt(event.target.value);
    //  .filter will go through array and find selected item. ie, horns
    const myFilteredBeasts = data.filter((beast) => beast.horns === numHorns);

    event.target.value === "" ? setBeastData(data) : setBeastData(myFilteredBeasts);
  }

  return (
    <div className="App">
      <Header handleFilter={handleFilter} />
      <Main beastData={beastData} handleModal={handleModal} />
      <Footer />
      {modalShow && <SelectedBeast modalData={modalData} handleModal={handleModal} />}
    </div>
  );
}
