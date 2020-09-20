import React from "react";
// import styles
import "./styles/styles.scss";
// import components
import Header from "./components/Header";
import About from "./components/About";
import Packages from "./components/Packages";

function App() {
  return (
    <div>
     <Header />
     <About/>
     <Packages/>
    </div>
  );
}

export default App;


