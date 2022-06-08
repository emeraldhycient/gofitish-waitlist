import React from "react";

function Podcast() {
  return (
    <section className="h-fit md:h-screen w-full">
      <div className=" h-full w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 h-full  w-11/12 md:w-10/12 mx-auto gap-6">
          <div className="h-full flex justify-end items-center">
            {/*<img src={coaches} alt="coaches" className="h-[400px]" />*/}

            <div className="bg-slate-900 h-[400px] w-full border-l-[1rem] border-t-[1rem] border-amber-500 ring-r-[1rem] ring-amber-500 p-5">
              <img
                src="https://i.pinimg.com/564x/3c/b0/bb/3cb0bb2bfb05217261348af09effb875.jpg"
                alt="coaches"
                className="h-full w-full"
              />
            </div>
          </div>

          <div className="h-full flex flex-col justify-center  ">
            <h1 className="text-5xl text-slate-900 font-bold">
              Listen To Your Favourite Coaches on the go 🎧
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
        </div>
      </div>
    </section>
  );
}

export default Podcast;
