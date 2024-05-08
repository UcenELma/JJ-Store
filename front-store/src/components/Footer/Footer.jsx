import React from "react";

const Footer = () => {
  return (
    <div>
      <div className="border-t mb-4 flex items-center justify-center px-6 pt-4 text-sm">
        <span className="dark:text-gray-600">
          <div className="py-1 border-gray-300">
            <div className="container mx-auto flex justify-center relative">
              <nav className="flex gap-20">
                <a
                  href="#"
                  className="font-bold uppercase text-black hover:text-black px-23 py-2 "
                >
                  Lorelor
                </a>
                <a
                  href="#"
                  className="font-serif text-sm text-gray-500 hover:text-black px-3 py-2 "
                >
                  consectetur
                </a>
                <a
                  href="#"
                  className="font-serif text-sm text-gray-500 hover:text-black px-3 py-2 "
                >
                  sitamet
                </a>
                <a
                  href="#"
                  className="font-serif text-sm text-gray-500 hover:text-black px-3 py-2 "
                >
                  dolorolor
                </a>
                <div className="relative group">
                  <button className="font-serif text-sm text-gray-500 hover:text-black px-3 py-2  focus:outline-none">
                    Category ∨
                  </button>
                  <div className="absolute hidden group-hover:block bg-gray-100 text-gray-700 rounded-md mt-1 border border-gray-300 z-10">
                    <a
                      href="#"
                      className="font-serif text-sm block px-4 py-2 hover:bg-gray-200 cursor-pointer"
                    >
                      Lorem
                    </a>
                    <a
                      href="#"
                      className="font-serif text-smblock px-4 py-2 hover:bg-gray-200 cursor-pointer"
                    >
                      ipsum
                    </a>
                    <a
                      href="#"
                      className="font-serif text-sm block px-4 py-2 hover:bg-gray-200 cursor-pointer"
                    >
                      consectetur
                    </a>
                    <a
                      href="#"
                      className="font-serif text-sm block px-4 py-2 hover:bg-gray-200 cursor-pointer"
                    >
                      adipisicing
                    </a>
                    <a
                      href="#"
                      className="font-serif text-sm block px-4 py-2 hover:bg-gray-200 cursor-pointer"
                    >
                      eliIste
                    </a>
                  </div>
                </div>
                <a
                  href="#"
                  className="font-serif text-sm text-gray-500 hover:text-black px-3 py-2 "
                >
                  Products
                </a>
              </nav>
            </div>
          </div>
        </span>
      </div>
      <footer className="p-6 border-t border-b dark:bg-gray-100 dark:text-gray-800">
        <div className="container mb-4 grid grid-cols-2 mx-auto gap-x-3 gap-y-8 sm:grid-cols-3 md:grid-cols-4">
          <div className="flex flex-col space-y-4">
            <h2 className="font-medium">Getting started</h2>
            <div className="flex flex-col space-y-2 text-sm dark:text-gray-600">
              <a rel="noopener noreferrer" href="#">
                Installation
              </a>
              <a rel="noopener noreferrer" href="#">
                Release Notes
              </a>
              <a rel="noopener noreferrer" href="#">
                Upgrade Guide
              </a>
              <a rel="noopener noreferrer" href="#">
                Using with Preprocessors
              </a>
              <a rel="noopener noreferrer" href="#">
                Optimizing for Production
              </a>
              <a rel="noopener noreferrer" href="#">
                Browser Support
              </a>
              <a rel="noopener noreferrer" href="#">
                IntelliSense
              </a>
            </div>
          </div>
          <div className="flex flex-col space-y-4">
            <h2 className="font-medium">Core Concepts</h2>
            <div className="flex flex-col space-y-2 text-sm dark:text-gray-600">
              <a rel="noopener noreferrer" href="#">
                Utility-First
              </a>
              <a rel="noopener noreferrer" href="#">
                Responsive Design
              </a>
              <a rel="noopener noreferrer" href="#">
                Hover, Focus, &amp; Other States
              </a>
              <a rel="noopener noreferrer" href="#">
                Dark Mode
              </a>
              <a rel="noopener noreferrer" href="#">
                Adding Base Styles
              </a>
              <a rel="noopener noreferrer" href="#">
                Extracting Components
              </a>
              <a rel="noopener noreferrer" href="#">
                Adding New Utilities
              </a>
            </div>
          </div>
          <div className="flex flex-col space-y-4">
            <h2 className="font-medium">Customization</h2>
            <div className="flex flex-col space-y-2 text-sm dark:text-gray-600">
              <a rel="noopener noreferrer" href="#">
                Configuration
              </a>
              <a rel="noopener noreferrer" href="#">
                Theme Configuration
              </a>
              <a rel="noopener noreferrer" href="#">
                Breakpoints
              </a>
              <a rel="noopener noreferrer" href="#">
                Customizing Colors
              </a>
              <a rel="noopener noreferrer" href="#">
                Customizing Spacing
              </a>
              <a rel="noopener noreferrer" href="#">
                Configuring Variants
              </a>
              <a rel="noopener noreferrer" href="#">
                Plugins
              </a>
            </div>
          </div>
          <div className="flex flex-col space-y-4">
            <h2 className="font-medium">Community</h2>
            <div className="flex flex-col space-y-2 text-sm dark:text-gray-600">
              <a rel="noopener noreferrer" href="#">
                GitHub
              </a>
              <a rel="noopener noreferrer" href="#">
                Discord
              </a>
              <a rel="noopener noreferrer" href="#">
                Twitter
              </a>
              <a rel="noopener noreferrer" href="#">
                YouTube
              </a>
            </div>
          </div>
        </div>
        <div className="dark:text-gray-600 border-t border-gray-400 px-6 pt-4 text-sm">
          <div className="flex justify-between">
            <div className="flex justify-between gap-20">
              <div>Politique de confidentialité</div>
              <div>Politique de cookies</div>
              <div>Condition d'utilisation</div>
            </div>
            <span>© Copyright 2024. JJ-Group All Rights Reserved.</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
