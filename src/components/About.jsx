import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-5 pt-5">
          <p className="  sm:text-2xl md:text-4xl font-bold inline border-b-4 border-gray-500 mt-5q">
            About
          </p>
        </div>

        <p className="text-sm md:text-xl sm:mt-14 md:mt-20">
          I'm A. Mohamed Musthaqeem, A passionate and innovative web developer
          with a focus on front-end development. With a solid foundation in
          HTML, CSS, and JavaScript, along with expertise in popular JavaScript
          frameworks like ReactJS, I thrive in creating dynamic and engaging
          user experiences on the web.
        </p>

        <br />

        <p className="text-sm md:text-xl ">
          My journey into the world of web development began with a
          curiosity-driven exploration of HTML and CSS, where I found myself
          captivated by the ability to bring creativity to life on the digital
          canvas. As I delved deeper into JavaScript, I realized its immense
          potential in shaping interactive and responsive web applications,
          which motivated me to expand my skills further.
        </p>
      </div>
    </div>
  );
};

export default About;
