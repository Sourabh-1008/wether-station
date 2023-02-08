// import React, { createContext, useState } from "react";

// export const AuthContext = createContext();

// const AuthContextProvider = ({ children }) => {
//   const [auth, setAuth] = useState({});

//   return (
//     <AuthContext.Provider value={{ auth, setAuth }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };

// export default AuthContextProvider;
import React, { createContext, useReducer } from "react";
import { reducer, initialState } from "../Actions/Authaction";

export const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <AuthContext.Provider value={{ state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
