import React from "react";
import amazonas from "../img/amazonas.PNG";
import guajolotas from "../img/guajolotas.PNG";
import pokedex from "../img/pokedex.PNG";
import movies from "../img/movies.PNG";
import utest from "../img/utest.PNG"
import bokeein from '../img/bokkein.PNG'
import gifsapp from '../img/libreriagifs.PNG'

const Projects = () => {
  return (
    <section
      className="bg-white overflow-hidden text-gray-700 text-[35px] px-5 py-10"
      id="projects"
    >
      <h1 class="text-center text-4xl tracking-tight font-extrabold text-gray-800 sm:text-5xl md:text-6xl">
        <span class=" block text-indigo-600 xl:inline"> Projects</span>
      </h1>
      <div className="container px-5 py-8 mx-auto lg:pt-12 lg:px-32">
        <div className="flex flex-wrap -m-1 md:-m-2">
          <div className="flex flex-wrap w-1/3">
            <div className="w-full p-1 md:p-2">
              <a href="https://employees1-67771.web.app/">
                <img
                  alt="gallery"
                  className="block object-cover object-center w-full h-full rounded-lg"
                  src={amazonas}
                />
              </a>
            </div>
          </div>
          <div className="flex flex-wrap w-1/3">
            <div className="w-full p-1 md:p-2">
              <a href="https://guajolota-redux.vercel.app/">
                <img
                  alt="gallery"
                  className="block object-cover object-center w-full h-full rounded-lg"
                  src={guajolotas}
                />
              </a>
            </div>
          </div>
          <div className="flex flex-wrap w-1/3">
            <div className="w-full p-1 md:p-2">
              <a href="https://pruebadesalida-18cd7.web.app/">
                <img
                  alt="gallery"
                  className="block object-cover object-center w-full h-full rounded-lg"
                  src={pokedex}
                />
              </a>
            </div>
          </div>
          <div className="flex flex-wrap w-1/3">
            <div className="w-full p-1 md:p-2">
              <a href="https://migo1218.github.io/SPRINT-1/index.html">
                <img
                  alt="gallery"
                  className="block object-cover object-center w-full h-full rounded-lg"
                  src={movies}
                />
              </a>
            </div>
          </div>

          <div className="flex flex-wrap w-1/3">
            <div className="w-full p-1 md:p-2">
              <a href="https://utest.vercel.app/">
                <img
                  alt="gallery"
                  className="block object-cover object-center w-full h-full rounded-lg"
                  src={utest}
                />
              </a>
            </div>
          </div>

          <div className="flex flex-wrap w-1/3">
            <div className="w-full p-1 md:p-2">
              <a href="https://bookein.vercel.app/">
                <img
                  alt="gallery"
                  className="block object-cover object-center w-full h-full rounded-lg"
                  src={bokeein}
                />
              </a>
            </div>
          </div>

          <div className="flex flex-wrap w-1/3">
            <div className="w-full p-1 md:p-2">
              <a href="https://gifs-app-one.vercel.app/">
                <img
                  alt="gallery"
                  className="block object-cover object-center w-full h-full rounded-lg"
                  src={gifsapp}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
