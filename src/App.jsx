import { useContext, useState } from "react";
import ChildComponent from "./ChildComponent";
import { MeraContext } from "./context/store";

export default function App() {
  const { parent, setParent, idk } = useContext(MeraContext);

  return (
    <>
      {" "}
      <div className="py-10 w-full h-full capitalize text-center text-xl font-bold bg-yellow-500 ">
        <h1 className="text-5xl text-white pb-5  " onClick={idk}>
          redux {parent} !!!!
        </h1>
      </div>
      <ChildComponent />
    </>
  );
}
