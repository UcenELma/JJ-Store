import React from "react";
import img1 from "../../assets/IMG/article/a1.jpeg";
import img2 from "../../assets/IMG/article/a2.jpeg";
import img3 from "../../assets/IMG/article/a3.jpeg";

const articlesData = [
  {
    id: 1,
    imageUrl: img1,
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus pariatur animi temporibus nesciunt praesentium dolore sed nulla ipsum eveniet corporis quidem, mollitia itaque minus soluta, voluptates neque explicabo tempora nisi culpa eius atque dignissimos. Molestias explicabo corporis voluptatem?"
  },
  {
    id: 2,
    imageUrl: img2,
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus pariatur animi temporibus nesciunt praesentium dolore sed nulla ipsum eveniet corporis quidem, mollitia itaque minus soluta, voluptates neque explicabo tempora nisi culpa eius atque dignissimos. Molestias explicabo corporis voluptatem?"
  },
  {
    id: 3,
    imageUrl: img3,
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus pariatur animi temporibus nesciunt praesentium dolore sed nulla ipsum eveniet corporis quidem, mollitia itaque minus soluta, voluptates neque explicabo tempora nisi culpa eius atque dignissimos. Molestias explicabo corporis voluptatem?"
  }
];

const LatestArticles = () => {
  return (
    <div className="flex flex-wrap justify-center">
      {articlesData.map(article => (
        <article key={article.id} className="m-4 max-w-sm rounded-lg border border-gray-100 bg-white shadow-sm">
          <img
            alt=""
            src={article.imageUrl}
            className="h-56 w-full object-cover rounded-t-lg"
          />

          <div className="p-4 sm:p-6">
            <a href="#">
              <h3 className="text-lg font-medium text-gray-900">
                {article.title}
              </h3>
            </a>

            <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
              {article.description}
            </p>

            <a
              href="#"
              className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600"
            >
              Find out more
              <span
                aria-hidden="true"
                className="block transition-all group-hover:ms-0.5 rtl:rotate-180"
              >
                &rarr;
              </span>
            </a>
          </div>
        </article>
      ))}
    </div>
  );
};

export default LatestArticles;
