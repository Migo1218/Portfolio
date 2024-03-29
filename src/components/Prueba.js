import React from "react";
import about from "../img/about.PNG";

const Prueba = () => {
  return (
    <div class="relative bg-white overflow-hidden">
      <div class="max-w-7xl mx-auto">
        <div class="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <svg
            class="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>

          <div>
            <div class="relative pt-6 px-4 sm:px-6 lg:px-8"></div>
          </div>

          <main class="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div class="sm:text-center lg:text-left">
              <h1 class="text-4xl tracking-tight font-extrabold text-gray-800 sm:text-5xl md:text-6xl">
                <span class="block xl:inline">Hello there,</span>
                <span class="block text-indigo-600 xl:inline"> I'm Miguel</span>
              </h1>
              <p class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                I'm a software developer interested in constant learning of new
                technologies, I like to provide real solutions to everyday
                problems through apps development
              </p>
              <div class="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                <div class="rounded-md shadow">
                  <a
                    href="#contact"
                    class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                  >
                    Get in touch
                  </a>
                </div>
                <div class="mt-3 sm:mt-0 sm:ml-3">
                  <a
                    href="https://drive.google.com/file/d/1xP7UBo_4B5A04qp6X4m5mkYeA-UxC8o2/view?usp=sharing"
                    target="_blank"
                    class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10"
                  >
                    View CV
                  </a>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div class="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <img
          class="h-70 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
          src={about}
          alt=""
        />
      </div>

     
    </div>



  );
};

export default Prueba;
