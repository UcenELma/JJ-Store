import React from "react";
import { TEInput, TERipple } from "tw-elements-react";
import logo from "../../assets/IMG/JJ-logo/png/3.png";
import bg1 from "../../assets/IMG/bg/bg3.jpeg";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../features/authSlice";
import axios from "axios";


const Signin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const goToSignUp = () => { 
    navigate("/register")
  };
  const formSubmitHandler = async (e) => {
    e.preventDefault();
    if (username.trim() === "") return toast.error("Username is required");
    if (password.trim() === "") return toast.error("Password is required");

    try {
      const res = await axios.post(
        "http://localhost:2500/store/login",
        {
          username,
          password,
        },
        {
          withCredentials: true,
        }
      );

      console.log(res.data);
      const { user, token } = res.data;
      dispatch(login(user));
      localStorage.setItem("userInfo", JSON.stringify(token)); // Save user info to local storage
      navigate("/");

      // if (res.status === 201) {
      //   const userData = { emailOrUsername: email, password };
      //   try {
      //     const { data } = await request.post("/api/login", userData, {
      //       withCredentials: true,
      //     });
      //     console.log(data);
      //     const { user, token } = data;
      //     dispatch(login(user));
      //     localStorage.setItem("userInfo", JSON.stringify(token)); // Save user info to local storage
      //     navigate("/");
      //   } catch (error) {
      //     toast.error(error.response.data.message);
      //   }
      // } else {
      //   toast.error("Login failed. Please try again.");
      // }
    } catch (error) {
      console.error("Error logging in:", error);
      toast.error("Login failed. Please try again.");
    }
  };
  return (
    <section className="h-full bg-neutral-200 dark:bg-neutral-700">
      <div className="container h-full p-10">
        <div className="g-6 flex h-full flex-wrap items-center justify-center text-neutral-800 dark:text-neutral-200">
          <div className="w-full">
            <div className="block rounded-lg bg-white shadow-lg dark:bg-neutral-800">
              <div className="g-0 lg:flex lg:flex-wrap">
                {/* Left column container */}
                <div className="px-4 md:px-0 lg:w-6/12">
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
                    <form onSubmit={formSubmitHandler}>
                      <p className="mb-4">Please login to your account</p>
                      {/* Username input */}
                      <div className="mb-4">
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
                          onChange={(e) => setUsername(e.target.value)}
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
                          placeholder="password"
                          name="password"
                          autoComplete="current-password"
                          onChange={(e) => setPassword(e.target.value)}
                          className="mt-1 px-3 py-2 block w-full shadow-sm border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                        />
                      </div>
                      {/* Submit button */}
                      <div className="mb-12 pb-1 pt-1 text-center">
                        <TERipple rippleColor="light" className="w-full">
                          <button
                            className="mb-3 inline-block w-full rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]"
                            type="submit"
                            style={{
                              background:
                                "linear-gradient(to right, rgba(238,119,36,1), rgba(216,54,58,1), rgba(221,54,117,1), rgba(180,69,147,1)), url(${bg1})",
                            }}
                          >
                            Log in
                          </button>
                        </TERipple>
                        <a href="#!">Forgot password?</a>
                      </div>
                      {/* Register button */}
                      <div className="flex items-center justify-between pb-6">
                        <p className="mb-0 mr-2">Don't have an account?</p>
                        <TERipple rippleColor="light">
                          <button
                            type="button"
                            onClick={() => goToSignUp()}
                            className="inline-block rounded border-2 border-danger px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-danger transition duration-150 ease-in-out hover:border-danger-600 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-danger-600 focus:border-danger-600 focus:text-danger-600 focus:outline-none focus:ring-0 active:border-danger-700 active:text-danger-700 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"
                          >
                            <a href="">Sign up 1</a>
                          </button>
                        </TERipple>
                      </div>
                    </form>
                  </div>
                </div>
                {/* Right column container with background and description */}
                <div
                  className="flex items-center rounded-b-lg lg:w-6/12 lg:rounded-r-lg lg:rounded-bl-none"
                  style={{
                    backgroundImage: `linear-gradient(to right, rgba(238,119,36,0.8), rgba(216,54,58,0.8), rgba(221,54,117,0.8), rgba(180,69,147,0.8)), url(${bg1})`,
                    backgroundPosition: "center",
                    backgroundSize: "cover",
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

export default Signin;
