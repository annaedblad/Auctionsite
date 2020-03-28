import React from "react";
import Header from "./Components/Header";
import Navbar from "./Components/Navbar";
import Main from "./Components/Main";
import AuctionContextProvider from "./Contexts/AuctionContext";
import "./Styling/App.css";
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {  
  return (
    <div className="App">
      <AuctionContextProvider>
        <Header />
        <Navbar />
        <Main />
      </AuctionContextProvider>
    </div>
  );
}

export default App;
