import studio from "../../assets/studio.png";

function Join() {
  return (
    <section
      className="flex flex-col justify-center items-center h-[60vh] md:py-1  md:h-screen w-full"
      style={{
        background: `url(${studio})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="w-11/12 md:w-6/12 text-center mx-auto mb-8">
        <h1 className="text-4xl font-bold text-white mb-3">
          Join Our Waitlist
        </h1>
        <p className="text-gray-100 text-base">
          Be the first to know once we're live 😊{" "}
        </p>
      </div>
      <form action="" className="w-11/12 md:w-7/12 mx-auto">
        <select
          name=""
          id=""
          className="bg-gray-200 w-full py-3 px-1 border border-gray-400 mb-3 rounded"
        >
          <option value="">Select Category</option>
          <option value="">Gym instructor/nutritionist</option>
          <option value="">Gym student/nutritionist</option>
        </select>
        <div className="w-full block  md:flex justify-between items-center">
          <input
            type="text"
            placeholder="Email"
            className="bg-gray-200 w-full md:w-[80%]  py-2 px-1 border border-gray-400 mb-4 md:mb-0 rounded"
          />
          <button className="w-fit bg-amber-500 text-slate-900 text-normal font-bold py-2 px-4 rounded flex">
            Join Waitlist
          </button>
        </div>
      </form>
    </section>
  );
}

export default Join;
