import { createContext, useState } from "react";

export const IsloginContext = createContext({ Vislogin: false });

export const IsloginProvider = ({ children, value }) => {
  const [Vislogin, setVislogin] = useState(false);

  return (
    <IsloginContext.Provider
      value={{ Vislogin, setVislogin }}
    >
      
      {children}
    </IsloginContext.Provider>
  );
};
