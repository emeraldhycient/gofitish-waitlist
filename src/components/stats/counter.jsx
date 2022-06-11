import React from "react";

function Counter({ count, title }) {
  return (
    <div className="flex flex-col justify-center items-center">
      <h4 className="font-bold mb-4">{title}</h4>
      <div className="bg-slate-900 h-12 w-12 rounded full p-2 text-white flex justify-center items-center">
        <h1 className="text-amber-500">{count}</h1>
      </div>
    </div>
  );
}

export default Counter;
