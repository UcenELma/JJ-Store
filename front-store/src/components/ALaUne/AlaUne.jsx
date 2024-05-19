import React from "react";
import une1 from "../../assets/IMG/bg/bg3.jpeg";
import une2 from "../../assets/IMG/bg/img4.jpeg";
import une3 from "../../assets/IMG/bg/bg5.png";
import Button from "../Shared/Button";

const alaUneData = [
  {
    discount: "10% OFF",
    sale: "SUMMER SALE",
    description: "For a limited time only! a kdob hadchi",
    image: une1,
  },
  {
    discount: "25% OFF",
    sale: "SUMMER SALE",
    description: "For a limited time only! a kdob hadchi",
    image: une2,
  },
  {
    discount: "15% OFF",
    sale: "SUMMER SALE",
    description: "For a limited time only! a kdob hadchi",
    image: une3,
  },
  // Add more AlaUne items as needed following the same structure
];

const AlaUne = () => {
  return (
    <div>
      <div className="py-8">
        <div className="container">
          {alaUneData.map((item, index) => (
            <section key={index} className="px-3 py-5 lg:py-10">
              <div className={`grid lg:grid-cols-2 items-center justify-items-center gap-5 ${index % 2 === 0 ? '' : 'lg:flex-row-reverse'}`}>
                <div className={index % 2 === 0 ? 'order-1 lg:order-2' : 'order-2 lg:order-1'}>
                  <img className="h-80 w-80 object-cover lg:w-[500px] lg:h-[500px] rounded-xl" src={item.image} alt="" />
                </div>
                <div className={`flex flex-col justify-center items-center ${index % 2 === 0 ? 'order-2 lg:order-1' : 'order-1 lg:order-2'}`}>
                  <p className="text-4xl font-bold md:text-7xl text-orange-600">{item.discount}</p>
                  <p className="text-4xl font-bold md:text-7xl">{item.sale}</p>
                  <p className="mt-2 text-sm md:text-lg">{item.description}</p>
                  <div className="py-2 px-5 mt-5">
                    <Button text="Get Yours" bgColor="bg-gray-900" textColor="text-white" />
                  </div>
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
