import React, { Component } from "react";
import FlashCard from "./components/FlashCard.js";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="flex justify-center items-center h-screen">
        <FlashCard />
      </div>
    );
  }
}

export default App;
