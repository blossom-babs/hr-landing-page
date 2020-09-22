import React from "react";
// import styles
import "./styles/styles.scss";
// import components
import Header from "./components/Header";
import About from "./components/About";
import Packages from "./components/Packages";
import Offer from "./components/Offer";
import News from "./components/News";
import Footer from "./components/Footer";

import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Packages />
      <Offer />
      <News />
      <Footer />
    </div>
  );
}

export default App;
