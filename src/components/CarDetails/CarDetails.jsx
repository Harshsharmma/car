import React from "react";

const CarDetails = ({ car, onClick }) => {
  return (
    <section className=" ">
      <h2>{car.name}</h2>
      <img src={`${car.image}`} alt={car.name} />
      <p>Price: ${car.price}</p>
      <p>Mileage: {car.mileage} km</p>
      <p>Engine: {car.engine}</p>
      <button className="back-button" onClick={onClick}>
        Back to Cars
      </button>
    </section>
  );
};

export default CarDetails;
