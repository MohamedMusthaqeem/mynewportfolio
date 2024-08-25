const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full min-h-screen md:h-screen  bg-white text-black"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8">
          <p className="text-2xl md:text-4xl font-bold inline border-b-4 border-black">
            Contact
          </p>
          <p className="py-6">Submit the form to contact me</p>
        </div>
        <div className=" flex justify-center items-center">
          <form
            action="https://getform.io/f/99296498-9e92-43ff-aa94-f5bfeb1bc5eb"
            method="POST"
            className=" flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2 rounded-md text-black sm:text-sm md:text-xl border-black"
            />
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              className="my-4 p-2 bg-transparent border-2 rounded-md text-black  border-black"
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="10"
              className="p-2 bg-transparent border-2 rounded-md text-black  border-black"
            ></textarea>

            <button className="text-white  bg-blue-600 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-105 active:bg-blue-700 duration-300 sm:text-sm md:text-xl">
              Feel Free to Talk
            </button>
          </form>
        </div>{" "}
      </div>
    </div>
  );
};

export default Contact;
