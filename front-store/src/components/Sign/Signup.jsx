import React from "react";
import { TEInput, TERipple } from "tw-elements-react";
import logo from "../../../../../IMG/JJ-logo/png/3.png";
import bg1 from "../../../../../IMG/bg/bg1.jpeg"; // Import the bg1 image

const Signup = () => {
  return (
    <section className="h-full bg-neutral-200 dark:bg-neutral-700">
      <div className="container h-full p-10">
        <div className="g-6 flex h-full flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200">
          <div className="w-full">
            <div className="block rounded-lg bg-white shadow-lg dark:bg-neutral-800">
              <div className="g-0 lg:flex lg:flex-wrap">
                {/* Left column container */}
                <div className="px-4 md:px-0 lg:w-6/12 lg:order-last md:order-first">
                  <div className="md:mx-6 md:p-12">
                    <div className="text-center">
                      <img
                        className="mx-auto w-48 mb-8"
                        src={logo}
                        alt="logo"
                      />
                      <h4 className="mb-12 mt-1 pb-1 text-xl font-semibold">
                        We are The Jewlery Junction Team
                      </h4>
                    </div>
                    <form>
                      <p className="mb-4">Please create your account</p>
                      {/* Full name and Username input */}
                      <div className="mb-4 flex">
                        <div className="w-1/2 pr-2">
                          <label
                            htmlFor="fullname"
                            className="block text-sm font-medium text-gray-700"
                          ></label>
                          <input
                            type="text"
                            id="fullname"
                            placeholder="Full name"
                            name="fullname"
                            autoComplete="fullname"
                            className="mt-1 px-3 py-2 block w-full shadow-sm border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                          />
                        </div>
                        <div className="w-1/2 pl-2">
                          <label
                            htmlFor="username"
                            className="block text-sm font-medium text-gray-700"
                          ></label>
                          <input
                            type="text"
                            id="username"
                            placeholder="Username"
                            name="username"
                            autoComplete="username"
                            className="mt-1 px-3 py-2 block w-full shadow-sm border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                          />
                        </div>
                      </div>
                      {/* Email input */}
                      <div className="mb-4">
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-gray-700"
                        ></label>
                        <input
                          type="email"
                          id="email"
                          placeholder="Email"
                          name="email"
                          autoComplete="emial"
                          className="mt-1 px-3 py-2 block w-full shadow-sm border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                        />
                      </div>
                      {/* Password input */}
                      <div className="mb-4">
                        <label
                          htmlFor="password"
                          className="block text-sm font-medium text-gray-700"
                        ></label>
                        <input
                          type="password"
                          id="password"
                          placeholder="Password"
                          name="password"
                          autoComplete="current-password"
                          className="mt-1 px-3 py-2 block w-full shadow-sm border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                        />
                      </div>
                      {/* Submit button */}
                      <div className="mb-12 pb-1 pt-1 text-center">
                        <TERipple rippleColor="light" className="w-full">
                          <button
                            className="mb-3 inline-block w-full rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]"
                            type="button"
                            style={{
                              background:
                                "linear-gradient(to right, rgba(238,119,36,1), rgba(216,54,58,1), rgba(221,54,117,1), rgba(180,69,147,1)), url(${bg1})",
                            }}
                          >
                            Sign in
                          </button>
                        </TERipple>
                        {/* <a href="#!">Forgot password?</a> */}
                      </div>
                      {/* Register button */}
                      <div className="flex items-center justify-between pb-2">
                        <p className="mb-0 mr-2">Already have an account?</p>
                        <TERipple rippleColor="light">
                          <button
                            type="button"
                            className="inline-block rounded border-2 border-danger px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-danger transition duration-150 ease-in-out hover:border-danger-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-danger-600 focus:border-danger-600 focus:text-danger-600 focus:outline-none focus:ring-0 active:border-danger-700 active:text-danger-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                          >
                            Log in
                          </button>
                        </TERipple>
                      </div>
                    </form>
                  </div>
                </div>
                {/* Right column container with background and description */}
                <div
                  className="flex items-center rounded-b-lg lg:w-6/12 lg:rounded-r-lg lg:rounded-bl-none lg:order-first md:order-last"
                  style={{
                    backgroundImage: `linear-gradient(to right, rgba(238,119,36,0.8), rgba(216,54,58,0.8), rgba(221,54,117,0.8), rgba(180,69,147,0.8)), url(${bg1})`,
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                  }}
                >
                  <div className="px-4 py-6 text-white md:mx-6 md:p-12">
                    <h4 className="mb-6 text-xl font-semibold">
                      We are more than just a company
                    </h4>
                    <p className="text-sm">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;
