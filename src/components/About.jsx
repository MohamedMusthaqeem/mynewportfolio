const About = () => {
  return (
    <div
      name="about"
      className="w-full min-h-screen md:h-screen bg-white text-black"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-5 pt-5">
          <p className="text-2xl md:text-4xl font-bold inline border-b-4 border-gray-500 mt-5q">
            About
          </p>
        </div>

        <p className="text-lg md:text-xl sm:mt-14 md:mt-20">
          I'm a MERN stack developer, proficient in MongoDB, Express.js,
          React.js, and Node.js. I am a self motivated and resourceful person
          specialized in building dynamic and responsive web applications,
          leveraging both front-end and back-end technologies to create seamless
          user experiences.
        </p>

        <br />

        <p className="text-lg md:text-xl ">
          I began my journey by mastering HTML, CSS, and JavaScript, which
          provided a solid foundation for building static websites. As I
          progressed, I gained expertise in front-end development using
          React.js, where I honed my skills in creating dynamic and responsive
          user interfaces. My focus then shifted to back-end development, where
          I utilized Node.js and Express.js to build robust server-side
          applications and APIs, ensuring scalability and performance. Alongside
          this, I became proficient in managing and manipulating data using
          MongoDB, enabling me to create data-driven applications.
        </p>
      </div>
    </div>
  );
};

export default About;
