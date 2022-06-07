import coaches from "../../assets/coaches.png";
import herobg from "../../assets/herobg.png";

function HeroSection() {
  return (
    <section
      className="h-fit md:h-screen w-full"
      style={{ backgroundImage: `url(${herobg})`, backgroundSize: "cover" }}
    >
      <div className=" h-full w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 h-full  w-11/12 md:w-10/12 mx-auto gap-4">
          <div className="h-full flex flex-col justify-center  ">
            <h1 className="text-6xl text-slate-900 font-bold">
              We are The easiest way to manage
            </h1>
            <p className="my-6 text-slate-900">
              From the small stuff to the big picture, organizes the work so
              teams know what to do, why it matters, and how to get it done.
              From the small stuff to the big picture, organizes the work so
              teams know what to do, why it matters, and how to get it done.
            </p>
            <button className="w-fit bg-amber-500 text-white text-normal font-bold py-2 px-4 rounded uppercase">
              Join Waitlist
            </button>
          </div>
          <div className="h-full flex justify-end items-center">
            {/*<img src={coaches} alt="coaches" className="h-[400px]" />*/}

            <div className="bg-slate-900 h-[400px] w-full border-r-[1rem] border-b-[1rem] border-green-500 ring-r-[1rem] ring-amber-500 ">
              <img
                src="https://i.pinimg.com/564x/48/5e/c4/485ec4600139f5808dc76ea6e95463b9.jpg"
                alt="coaches"
                className="h-full w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
