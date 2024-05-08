import React from "react";
import une1 from "../../../../../IMG/bg/img3.webp";
// import une2 from "../../../../../IMG/bg/img1.jpeg";
// import une4 from "../../../../../IMG/bg/bg5.png";

import Button from "../Shared/Button";

const alaUneData = [
  {
    discount: "15% OFF",
    sale: "SUMMER SALE",
    description: "For limited time only! a kdob hadchi",
    image: une1,
  },
  // Add more AlaUne items as needed following the same structure
];

const AlaUne = () => {
  return (
    <div>
      <div className="py-8">
        <div className="container">
          {alaUneData.map((item, index) => (
            <section key={index} className={`px-3 py-5 lg:py-10 ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
              <div className="grid lg:grid-cols-2 items-center justify-items-center gap-5">
                <div className={`order-2 lg:order-${index % 2 !== 0 ? '1' : '2' } flex flex-col justify-center items-center`}>
                  <p className="text-4xl font-bold md:text-7xl text-orange-600">{item.discount}</p>
                  <p className="text-4xl font-bold md:text-7xl">{item.sale}</p>
                  <p className="mt-2 text-sm md:text-lg">{item.description}</p>
                  <div className="py-2 px-5 mt-5">
                    <Button text="Get Yours" bgColor="bg-gray-900" textColor="text-white" />
                  </div>
                </div>
                <div className={`order-1 lg:order-${index % 2 !== 0 ? '2' : '1' }`}>
                  <img className="h-80 w-80 object-cover lg:w-[500px] lg:h-[500px] rounded-xl" src={item.image} alt="" />
                </div>
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AlaUne;
