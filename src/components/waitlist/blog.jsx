import note from "../../assets/note.png";
function Blog() {
  return (
    <section className="h-fit md:h-[100vh] w-full bg-[#FFFCF6] py-12">
      <div className=" h-full w-11/12 md:w-6/12 mx-auto text-center flex flex-col justify-center items-center">
        <h1 className="text-4xl text-slate-900 font-bold">
          Fitness blogs and article curated just for you 📚
        </h1>
        <p className="my-6 text-slate-900 text-xl">
          we dont just give you anyone , we give you the best and vetted
          caoches, nutrionists and even more than that we give you the best and
          vetted dietitians 🏃.
        </p>

        <div className="border-[1rem] border-white bg-gray-50  rounded-full ">
          <img
            src={note}
            alt=""
            className="h-[300px] w-fit  rounded-full z-20"
          />
        </div>
      </div>
    </section>
  );
}

export default Blog;
