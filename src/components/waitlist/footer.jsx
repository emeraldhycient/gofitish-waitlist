import React from "react";
import { MdMarkEmailUnread } from "react-icons/md";
import { ImWhatsapp } from "react-icons/im";
import { BsTwitter, BsLinkedin } from "react-icons/bs";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <section className="h-fit md:h-16 py-8 md:py-0">
      <div className="grid grid-cols-1 md:grid-cols-2 h-full gap-6">
        <div className="h-full flex justify-center items-center">
          <div className="bg-slate-900 h-8 w-8 mx-3 flex justify-center items-center">
            <MdMarkEmailUnread size={22} className="text-amber-500" />
          </div>
          <div className="bg-slate-900 h-8 w-8 mx-3 flex justify-center items-center">
            <ImWhatsapp className="text-amber-500" />
          </div>
          <div className="bg-slate-900 h-8 w-8 mx-3 flex justify-center items-center">
            <BsTwitter className="text-amber-500" />
          </div>{" "}
          <div className="bg-slate-900 h-8 w-8 mx-3 flex justify-center items-center">
            <BsLinkedin className="text-amber-500" />
          </div>{" "}
        </div>

        <div className="h-full  flex  justify-center items-center">
          ©️ {year}
          <h1 className="font-extrabold text-lg text-slate-900 flex ml-3">
            <span className="text-amber-500">Go</span>fitish
          </h1>
        </div>
      </div>
    </section>
  );
}

export default Footer;
