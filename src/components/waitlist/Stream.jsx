import videofile from "../../assets/videofile.svg";
function Stream() {
  return (
    <section className="h-fit md:h-screen w-full">
      <div className=" h-full w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 h-full  w-11/12 md:w-10/12 mx-auto gap-6">
          <div className="h-full flex flex-col justify-center  ">
            <h1 className="text-5xl text-slate-900 font-bold">
              Follow your coaches from home 📺
            </h1>
            <p className="my-6 text-slate-900 ">
              pick up your phone spend that time you were supposed to catch a
              bus to the gym to get your excercise done ,following your tutor on
              the platform Live , and get your workout done. Exercise doesnt
              have to be time consuming ,it can be done in 15mins or less ⌚ .
            </p>
            <button className="w-fit bg-amber-500 text-white text-normal font-bold py-2 px-4 rounded uppercase">
              Join Waitlist
            </button>
          </div>

          <div className="h-full flex justify-end items-center">
            {/*<img src={coaches} alt="coaches" className="h-[400px]" />*/}

            <div className="bg-slate-900 h-[400px] w-full border-r-[1rem] border-t-[1rem] border-amber-500 ring-r-[1rem] ring-amber-500 p-5">
              <img src={videofile} alt="coaches" className="h-full w-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Stream;
