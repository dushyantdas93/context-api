import { createContext, useState } from "react";

export const MeraContext = createContext();

export function MyProvider({ children }) {
  const [parent, setParent] = useState("toolkit");

  function idk() {
    setParent("xya");
  }
  return (
    <MeraContext.Provider value={{ parent, setParent, idk }}>
      {children} //App
    </MeraContext.Provider>
  );
}
