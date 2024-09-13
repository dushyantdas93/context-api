import React from "react";
import SuperChild from "./SuperChild";

const ChildComponent = () => {
  return (
    <div className="w-full h-full text-center bg-red-500 ">
      <h3 className=" my-5 p-5  text-white capitalize ">this is child </h3>

      <SuperChild />
    </div>
  );
};

export default ChildComponent;
