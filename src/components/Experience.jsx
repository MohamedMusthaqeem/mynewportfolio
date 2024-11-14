import { techs } from "../Data/Links";

const Experience = () => {
  return (
    <div
      name="experience"
      className=" text-black min-h-screen md:h-full w-full"
      style={{
        backgroundImage: `url('https://img.freepik.com/premium-vector/islamic-background-with-arabic-hexagonal-ornament-arabian-seamless-geometric-pattern-texture_57082-2613.jpg?size=626&ext=jpg&ga=GA1.1.842344073.1724656545&semt=ais_hybrid')`,
      }}
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col  justify-center w-full h-full text-black">
        <div>
          <p className="text-2xl sm:mt-5 md:text-4xl font-bold border-b-4 border-gray-500 p-2 pt-6 inline">
            Skills
          </p>
          <p className="py-6 sm:text-sm md:text-xl">
            These are the technologies I've worked with
          </p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-200 py-2 rounded-lg bg-white ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4 sm:text-sm md:text-xl">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
