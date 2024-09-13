import React, { useContext } from "react";
import { MeraContext } from "./context/store";

const SuperChild = () => {
  
  const { parent, setParent } = useContext(MeraContext);
  return (
    <div className="text-sm bg-blue-500 h-28 w-24">
      SuperChild
      <button
        className="px-4 py-3 bg-slate-950 rounded-lg text-white text-sm"
        onClick={() =>
          setParent(parent === "toolkit" ? "toothpaste" : "toolkit")
        }
      >
        {" "}
        Change
      </button>
    </div>
  );
};

export default SuperChild;
