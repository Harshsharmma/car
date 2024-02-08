import React from "react";

const CarList = ({ onClick }) => {
  const cars = [
    {
      id: 1,
      name: "Hyundai Creta",
      image: "creata.jpg",
      price: 20000,
      mileage: 10000,
      engine: "1.5L Petrol",
    },
    {
      id: 2,
      name: "Maruti Swift",
      image: "swift.jpg",
      price: 10000,
      mileage: 1000,
      engine: "2.5L Petrol",
    },
    {
      id: 3,
      name: "Maruti Alto",
      image: "alto.jpg",
      price: 2000,
      mileage: 1000,
      engine: "1.5L Petrol",
    },
  ];

  return (
    <section className="car-list">
      <h2 className=" bg-slate-100 text-center">Our Cars</h2>
      <div className=" mx-auto w-auto flex flex-wrap justify-center ">
        {cars.map((car) => (
          <div key={car.id} className="" onClick={() => onClick(car)}>
            <img className="" src={`${car.image}`} alt={car.name} />
            <h3 className=" ml-80">{car.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CarList;
