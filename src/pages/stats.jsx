import { useState, useEffect } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Counter from "../components/stats/counter";
import List from "../components/stats/list";

function Stats() {
  const api_url = import.meta.env.VITE_API_URL;

  const [waitlist, setwaitlist] = useState([]);
  const [investors, setinvestors] = useState([]);
  const [students, setstudents] = useState([]);
  const [coaches, setcoaches] = useState([]);

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

  useEffect(() => {
    axios
      .get(`${api_url}/waitlist`)
      .then((res) => {
        setwaitlist(res.data.waitlist);
      })
      .catch((err) => {
        notifyWarning(err.response.data.message);
        console.log(err.response);
      });
  }, []);

  useEffect(() => {
    getCounterInvestors();
    getCounterStudents();
    getCounterCoaches();
  }, [waitlist]);

  const getCounterInvestors = () => {
    setinvestors(waitlist.filter((person) => person.category === "investor"));
  };

  const getCounterStudents = () => {
    setstudents(waitlist.filter((person) => person.category === "student"));
  };

  const getCounterCoaches = () => {
    setcoaches(waitlist.filter((person) => person.category === "instructor"));
  };

  return (
    <div className="bg-gray-100 h-screen overflow-y-auto pt-16 px-3">
      <ToastContainer />
      <div className="grid grid-cols-3 md:grid-cols-3 gap-4 md:w-8/12 mx-auto mb-3">
        <div className="bg-white border  shadow p-3 w-full h-fit pb-4">
          <Counter count={students.length} title="students" />
        </div>
        <div className="bg-white border  shadow p-3 w-full h-fit pb-4">
          <Counter count={coaches.length} title="coaches" />
        </div>
        <div className="bg-white border  shadow p-3 w-full h-fit pb-4">
          <Counter count={investors.length} title="Investor" />
        </div>{" "}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-6 gap-4 md:w-8/12 mx-auto">
        <div className="md:col-span-2 bg-white border  shadow p-3 ">
          <Counter count={waitlist.length} title="Number of people joined" />
        </div>
        <div className="md:col-span-4 bg-white border shadow p-3">
          <h4 className="font-bold mb-4">People on the list</h4>
          <div className="w-full overflow-x-auto">
            <table className="table w-full border">
              <thead className="w-full">
                <tr className="border w-full">
                  <th className="text-left p-3">Email</th>
                  <th className="text-left p-3">Category</th>
                </tr>
              </thead>
              <tbody>
                <List waitlist={waitlist} />
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;
