import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import studio from "../../assets/studio.png";
import loader from "../../assets/loader.gif";

function Join() {
  const api_url = import.meta.env.VITE_API_URL;

  const [email, setEmail] = useState("");
  const [category, setcategory] = useState("");
  const [isloading, setisloading] = useState(false);

  const notifyWarning = (message) => {
    toast.warn(message, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const notifySuccess = (message) => {
    toast.success(message, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setisloading(true);
    axios
      .post(`${api_url}/waitlist`, {
        email: email,
        category: category,
      })
      .then((res) => {
        notifySuccess(res.data.message);
        //console.log(res);
        setEmail("");
        setcategory("");
      })
      .catch((err) => {
        notifyWarning(err.response.data.message);
        console.log(err.response);
      })
      .finally(() => {
        setisloading(false);
      });
  };

  return (
    <section
      className="flex flex-col justify-center items-center h-[60vh] md:py-1  md:h-screen w-full mb-16 md:mb-0"
      style={{
        background: `url(${studio})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />

      <div className="w-11/12 md:w-6/12 text-center mx-auto mb-8">
        <h1 className="text-4xl font-bold text-white mb-3">
          Join Our Waitlist
        </h1>
        <p className="text-gray-100 text-base">
          Be the first to know once we're live 🚀 😊
        </p>
      </div>
      <form
        action=""
        className="w-11/12 md:w-7/12 mx-auto"
        onSubmit={handleSubmit}
      >
        <select
          name=""
          id=""
          value={category}
          onChange={(e) => setcategory(e.target.value)}
          className="bg-gray-200 w-full py-3 px-1 border border-gray-400 mb-3 rounded"
          required
        >
          <option value="">Select Category</option>
          <option value="instructor">Gym instructor/nutritionist</option>
          <option value="student">Gym student/nutritionist</option>
          <option value="investor">Vc firm / angel investor</option>
        </select>
        <div className="w-full block  md:flex justify-between items-center">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-gray-200 w-full md:w-[80%]  py-2 px-1 border border-gray-400 mb-4 md:mb-0 rounded"
            required
          />
          {isloading ? (
            <img src={loader} alt="loader" className="w-12 h-12" />
          ) : (
            <button
              type="submit"
              className="w-fit bg-amber-500 text-slate-900 text-normal font-bold py-2 px-4 rounded flex"
            >
              Join Waitlist
            </button>
          )}
        </div>
      </form>
    </section>
  );
}

export default Join;
