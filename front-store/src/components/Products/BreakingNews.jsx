import React from "react";
import image1 from "../../assets/IMG/news/il_fullxfull.4779037091_7c5v.jpg";
import image2 from "../../assets/IMG/news/black-gold-jewelry.webp";
import image3 from "../../assets/IMG/news/White-Gold-Diamond-Pendant-Diamondport-Jewellers-scaled.webp";

const cardData = [
  {
    id: 1,
    imgSrc: image1,
    title: "For Men's",
    description: "Starting At $29",
  },
  {
    id: 2,
    imgSrc: image2,
    title: "Black Friday",
    description: "Up to 20% Off",
  },
  {
    id: 3,
    imgSrc: image3,
    title: "For Women's",
    description: "25% Off",
  },
];

const BreakingNews = () => {
  return (
    <div className="py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mt-6">
        {cardData.map((card) => (
          <article key={card.id} className="relative isolate flex flex-col justify-end overflow-hidden rounded-xl px-8 pb-8 pt-40">
            <img
              src={card.imgSrc}
              alt={card.title}
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40" />
            <h3 className="z-10 mt-3 text-3xl font-bold text-white">{card.title}</h3>
            <div className="z-10 gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
              {card.description}
            </div>
            <button className="z-10 mt-4 px-4 py-2 bg-gray-100 text-gray-900 font-semibold rounded hover:bg-gray-300">
              Shop Now
            </button>
          </article>
        ))}
      </div>
    </div>
  );
};

export default BreakingNews;
