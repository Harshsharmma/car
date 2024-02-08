import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import CarList from "./components/CarList/CarList";
import CarDetails from "./components/CarDetails/CarDetails";
import Chatbot from "./components/Chatbot/Chatbot";
import Footer from "./components/Footer/Footer";

function App() {
  const [selectedCar, setSelectedCar] = useState(null);
  const handleCarClick = (car) => {
    setSelectedCar(car);
  };
  const handleBackClick = () => {
    setSelectedCar(null);
  };
  return (
    <div className="App">
      <Header />

      {selectedCar ? (
        <CarDetails car={selectedCar} onClick={handleBackClick} />
      ) : (
        <CarList onClick={handleCarClick} />
      )}

      <Chatbot />
      <Footer />
    </div>
  );
}

export default App;
