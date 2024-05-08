import React from "react";
import JJBalckLogo from "../../assets/IMG/png/9.png";
import { IoSearch } from "react-icons/io5";
import { FiUser } from "react-icons/fi";
import { HiOutlineShoppingBag } from "react-icons/hi2";

const MenuLinks = [
  {
    id: 1,
    name: "Home",
    link: "/#",
  },
  {
    id: 2,
    name: "Explore",
    link: "/#Explore",
  },
  {
    id: 3,
    name: "Contact Us",
    link: "/#ContactUs",
  },
];

const Navbar = () => {
  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-300 relative z-40">
      <div className="py-4">
        <div className="container flex justify-between items-center">
          {/* link section */}
          <div className="flex items-center gap-4">
            <div className="hidden lg:block">
              <ul className="flex font-serif items-center gap-4">
                {MenuLinks.map((data, index) => (
                  <li key={index}>
                    <a
                      href={data.link}
                      className="inline-block px-4 font-semibold text-gray-500 hover:text-black dark:hover:text-white duration-200"
                    >
                      {data.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* logo section */}
          <div className="50%">
            <img
              src={JJBalckLogo}
              alt="JJ logo"
              style={{ width: "300px", height: "auto" }}
            />
          </div>

          {/* navbar right section */}
          <div className=" flex justify-between items-center gap-4">
            {/* Search bar section */}
            <div style={{width:"160px"}} className=" relative group hidden sm:block">
              <input type="text" placeholder="Search" className="search-bar" />
              <IoSearch
                className="text-xl text-gray-600 group-hover:text-titleColor dark:text-gray-400 absolute top-1/2 -translate-y-1/2 right-3 duration-7000"
              />
            </div>

            {/* order button section */}
            <button className="relative p-3">
              <HiOutlineShoppingBag className="text-xl text-gray-600 dark:text-gray-400" />
              <div className="text-sm w-4 h-4 bg-red-500 text-white rounded-full absolute top-0 right-0 flex items-center justify-center">
                4
              </div>
            </button>

            {/* profil button section */}
            <button className="relative p-3">
              <FiUser className="text-xl text-gray-600 dark:text-gray-400" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;



////dark mode 
// import React from "react";
// import JJBalckLogo from "../../assets/IMG/png/9.png";
// import { IoSearch } from "react-icons/io5";
// import { FiUser } from "react-icons/fi";
// import { HiOutlineShoppingBag } from "react-icons/hi2";
// // import DarkMode from "./DarkMode";

// const MenuLinks = [
//   {
//     id: 1,
//     name: "Home",
//     link: "/#",
//   },
//   {
//     id: 2,
//     name: "Explore",
//     link: "/#Explore",
//   },
//   {
//     id: 3,
//     name: "Contact Us",
//     link: "/#ContactUs",
//   },
// ];

// const Navbar = () => {
//   return (
//     <div
//       className="
//     bg-white dark:bg-gray-900
//     dark:text-white duration-300 relative z-40"
//     >
//       <div className="py-4">
//         <div className="container flex justify-between items-center">
//           {/* link section */}
//           <div className="flex items-center gap-4">
//             <div className="hidden lg:block">
//               {/* some modif */}
//               <ul className="flex items-center gap-4">
//                 {MenuLinks.map((data, index) => (
//                   <li key={index}>
//                     <a
//                       href={data.link}
//                       className="
//                       inline-block px-4 font-semibold text-gray-500 
//                       hover:text-black 
//                       dark:hover:text-white
//                       duration-200"
//                     >
//                       {data.name}
//                     </a>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </div>

//           {/* logo section */}
//           <div className="dark:hidden">
//             <img
//               src={JJBalckLogo}
//               alt="JJ logo"
//               style={{ width: "300px", height: "auto" }}
//             />
//           </div>

//           {/* navbar right section */}
//           <div className="flex justify-between items-center gap-4">
//             {/* Search bar section */}
//             <div className=" relative group hidden sm:block">
//               <input type="text" placeholder="Search" className="search-bar" />
//               <IoSearch
//                 className="text-xl text-gray-600 group-hover:text-titleColor
//                     dark: text-gray-400 absolute top-1/2 -translate-y-1/2 right-3 duration-7000 "
//               />
//             </div>

//             {/* dark mode section */}
//             {/* <div className="relative p-3">
//               <DarkMode/>
//             </div> */}

//             {/* order button section */}
//             <button className="relative p-3">
//               <HiOutlineShoppingBag className="text-xl text-gray-600 dark:text-gray-400" />
//               <div className="text-sm w-4 h-4 bg-red-500 text-white rounded-full absolute top-0 right-0 flex items-center justify-center">
//                 4
//               </div>
//             </button>

//             {/* profil button section */}
//             <button className="relative p-3">
//               <FiUser className="text-xl text-gray-600 dark:text-gray-400" />
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navbar;
