import React from "react";

const Aboutme = () => {
  return (
      <div className="bg-gray-800" id="aboutme">
    <h1 class="text-center text-4xl tracking-tight font-extrabold text-gray-800 sm:text-5xl md:text-6xl py-5">
            
            <span class=" block text-indigo-600 xl:inline"> About me</span>
          </h1>
      
    <div className="min-w-screen min-h-screen  flex items-center justify-center px-5 py-5" >
    
      <div className="rounded-lg shadow-xl bg-gray-900 text-white">
        <div className="border-b border-gray-800 px-8 py-3">
          <div className="inline-block w-3 h-3 mr-2 rounded-full bg-red-500"></div>
          <div className="inline-block w-3 h-3 mr-2 rounded-full bg-yellow-300"></div>
          <div className="inline-block w-3 h-3 mr-2 rounded-full bg-green-400"></div>
        </div>
        <div className="px-8 py-6">
          <p>
            <em className="text-blue-400">const</em>{" "}
            <span className="text-green-400">aboutMe</span>{" "}
            <span className="text-pink-500">=</span>{" "}
            <em className="text-blue-400">function</em>(){" "}
          </p>
          <p>
            &nbsp;&nbsp;<span className="text-pink-500">return</span>{" "}
          </p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;name:{" "}
            <span className="text-yellow-300">'Miguel Hernández'</span>,
          </p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;position:{" "}
            <span className="text-yellow-300">'junior-developer'</span>,
          </p>
          <p>
            &nbsp;&nbsp;&nbsp;&nbsp;website:{" "}
            <span className="text-yellow-300">
              '
              <a
                href="www.linkedin.com/in/desarrolladorjuniormiguelh"
                target="_blank"
                className="text-yellow-300 hover:underline focus:border-none"
              >
                www.linkedin.com/in/desarrolladorjuniormiguelh
              </a>
              '
            </span>
            ,
          </p>
          <p>&nbsp;&nbsp;</p>
          <p></p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Aboutme;
