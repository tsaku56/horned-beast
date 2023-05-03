import "./App.css";

import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";

// rfc + enter to use this starter code.
// can use <> to make a fragment instead of doing a div

export default function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  );
}
