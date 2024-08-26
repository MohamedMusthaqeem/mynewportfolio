import { portfolios, skillfest, beginner } from "../Data/Links";
import Scroller from "./Scroller";

const Portfolio = () => {
  return (
    <div
      name="portfolio"
      className="text-black w-full min-h-screen"
      style={{
        backgroundImage: `url('https://img.freepik.com/premium-vector/islamic-background-with-arabic-hexagonal-ornament-arabian-seamless-geometric-pattern-texture_57082-2613.jpg?size=626&ext=jpg&ga=GA1.1.842344073.1724656545&semt=ais_hybrid')`,
      }}
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-2xl md:text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6 sm:text-sm md:text-xl">
            Check out some of my work right here
          </p>
        </div>
        <div>
          <h1 className="text-center text-xl font-bold pb-3 uppercase tracking-wider">
            Trail Projects
          </h1>
          <Scroller data={portfolios} speed="1" />
        </div>
        <div>
          <h1 className="text-center text-xl font-bold pb-3 uppercase tracking-wider">
            Beginner Projects
          </h1>
          <Scroller data={beginner} speed="-1" />
        </div>
        <div>
          <h1 className="text-center text-xl font-bold pb-3 uppercase tracking-wider">
            Main Project
          </h1>
          <Scroller data={skillfest} speed="1" />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
