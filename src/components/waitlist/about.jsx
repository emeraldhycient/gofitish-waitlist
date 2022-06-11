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
                Book Hands on fitness instructors and coaches for your daily
                fitness routines, nearest to you.
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
                Want a live Interaction from the comfort of your home? Book
                video sessions, take live fitness routines.
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
                Things could get pretty busy, but you don't have to put your
                journey on hold. Listen to sessions on the go.
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
                Bring the gym home. Shop fitness equipment. From the smallest
                dumbells to the biggest thredmills. we dont just connect you to
                an instructors, we connect you to the equipment you need also.
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
                Get accurate nutritional information,we don't just bring coaches
                we bring tested and certified coaches.
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
                You have a question but don't trust answers from google or other
                sources. Get health and fitness articles, answers to faqs, and
                lots more.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
