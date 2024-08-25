import myProfile from "../assets/profile.jpg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import { useTypewriter, Cursor } from "react-simple-typewriter";
const Home = () => {
  const [text] = useTypewriter({
    words: [
      "Front-End Developer",
      "Back-End Developer",
      "MERN Stack Developer",
    ],
    loop: {},
    typeSpeed: 120,
    deleteSpeed: 100,
  });
  return (
    <div name="home" className=" min-h-screen md:h-screen w-full bg-white">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-3xl md:text-4xl font-bold text-black">
            I'm a <span className="text-black">{text}</span>
            <span>
              <Cursor cursorStyle="<" />
            </span>
          </h2>
          <p className="text-gray-500 py-4 max-w-md sm:text-sm md:text-xl">
            Hey there👋. Passionate MERN stack developer with a genuine love for
            turning ideas into robust, scalable, and user-friendly applications.
            I thrive on challenges to learn quickly, adapting to new
            technologies as they emerge. My collaborative spirit shines through
            as I enjoy working closely with cross-functional teams to deliver
            high-quality solutions. With a focus on clean, efficient code, I am
            dedicated to creating seamless and engaging user experiences.
            Excited about the opportunity to contribute my skills and creativity
            to innovative projects.
          </p>

          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-blue-600 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>
        <img
          src={myProfile}
          alt="my profile"
          className=" mx-auto h-1/2 object-cover rounded-xl md:w-1/3"
        />
      </div>
    </div>
  );
};

export default Home;
