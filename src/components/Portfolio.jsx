import React from "react";
import fbClone from "../assets/portfolio/fbclone.png";
import msClone from "../assets/portfolio/msclone.png";
import taskTracker from "../assets/portfolio/tasktracker.png";
import bgGen from "../assets/portfolio/bggen.png";
import flexGrid from "../assets/portfolio/flex.png";
import newsium from "../assets/portfolio/newsium.png"
import skillfest from "../assets/portfolio/skillfest.jpg"

const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: fbClone,
    },
    {
      id: 2,
      src: msClone,
    },
    {
      id: 3,
      src: taskTracker,
    },
    {
      id: 4,
      src: bgGen,
    },
    {
      id: 5,
      src: flexGrid,
    },
    {
      id: 6,
      src: newsium,
    },
    {
      id: 7,
      src: skillfest,
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white min-h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className=" sm:text-3xl md:text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6 sm:text-sm md:text-xl">
            Check out some of my work right here
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 bg-gradient-to-r from-gray-800 to-gray-900 rounded-lg">
                  Demo
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 bg-gradient-to-r from-gray-800 to-gray-900 rounded-lg">
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
