import back from "../../assets/back.png";
import location from "../../assets/find.png";
import video from "../../assets/videos.png";
import podcast from "../../assets/podcast.png";
import Gym from "../../assets/gym.png";
import guarantee from "../../assets/guarantee.png";
import note from "../../assets/note.png";

function About() {
  return (
    <section className="h-fit w-full bg-[#FFFCF6] pb-3">
      <div
        className=" h-full w-full py-20 "
        style={{ backgroundImage: `url(${back})`, backgroundSize: "contain" }}
      >
        <div className="w-full md:w-6/12 mx-auto text-center flex flex-col justify-center items-center">
          <h6 className="text-lg  font-bold">What we Do.</h6>
          <h1 className="text-5xl text-slate-900 font-bold">
            The easiest way to manage
          </h1>
        </div>

        <div className="w-11/12 md:w-10/12 mx-auto mt-12 grid grid-cols-2 md:grid-cols-3 gap-4">
          <div className=" hover:rounded-2xl hover:shadow hover:pb-4">
            <div className="flex flex-col justify-center items-center text-center">
              <div className="bg-slate-900 icon-holder  h-16 w-16 rounded-full my-3 p-2">
                <img src={location} alt="" />
              </div>
              <h6 className="text-slate-900 font-bold text-xl my-2">
                Find Coaches Around
              </h6>
              <p className="text-gray-400">
                From the small stuff to the big picture, organizes the work so
                teams know what to do, why it matters, and how to get it done.
              </p>
            </div>
          </div>
          <div className=" hover:rounded-2xl hover:shadow hover:pb-4">
            <div className="flex flex-col justify-center items-center text-center">
              <div className="bg-slate-900 icon-holder  h-16 w-16 rounded-full my-3 p-2">
                <img src={video} alt="" />
              </div>
              <h6 className="text-slate-900 font-bold text-xl my-2">
                Video sessions
              </h6>
              <p className="text-gray-400">
                From the small stuff to the big picture, organizes the work so
                teams know what to do, why it matters, and how to get it done.
              </p>
            </div>
          </div>
          <div className=" hover:rounded-2xl hover:shadow hover:pb-4">
            <div className="flex flex-col justify-center items-center text-center">
              <div className="bg-slate-900 icon-holder  h-16 w-16 rounded-full my-3 p-2">
                <img src={podcast} alt="" />
              </div>{" "}
              <h6 className="text-slate-900 font-bold text-xl my-2">
                Follow Audio Courses
              </h6>
              <p className="text-gray-400">
                From the small stuff to the big picture, organizes the work so
                teams know what to do, why it matters, and how to get it done.
              </p>
            </div>
          </div>
          <div className=" hover:rounded-2xl hover:shadow hover:pb-4">
            <div className="flex flex-col justify-center items-center text-center">
              <div className="bg-slate-900 icon-holder  h-16 w-16 rounded-full my-3 p-2">
                <img src={Gym} alt="" />
              </div>{" "}
              <h6 className="text-slate-900 font-bold text-xl my-2">
                Shop Gym Equipment
              </h6>
              <p className="text-gray-400">
                From the small stuff to the big picture, organizes the work so
                teams know what to do, why it matters, and how to get it done.
              </p>
            </div>
          </div>
          <div className=" hover:rounded-2xl hover:shadow hover:pb-4">
            <div className="flex flex-col justify-center items-center text-center">
              <div className="bg-slate-900 icon-holder  h-16 w-16 rounded-full my-3 p-2">
                <img src={guarantee} alt="" />
              </div>{" "}
              <h6 className="text-slate-900 font-bold text-xl my-2">
                Vetted nutrionists and coaches
              </h6>
              <p className="text-gray-400">
                From the small stuff to the big picture, organizes the work so
                teams know what to do, why it matters, and how to get it done.
              </p>
            </div>
          </div>
          <div className=" hover:rounded-2xl hover:shadow hover:pb-4">
            <div className="flex flex-col justify-center items-center text-center">
              <div className="bg-slate-900 icon-holder  h-16 w-16 rounded-full my-3 p-2">
                <img src={note} alt="" />
              </div>{" "}
              <h6 className="text-slate-900 font-bold text-xl my-2">
                Health and fitness blog
              </h6>
              <p className="text-gray-400">
                From the small stuff to the big picture, organizes the work so
                teams know what to do, why it matters, and how to get it done.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
