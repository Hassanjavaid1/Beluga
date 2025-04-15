"use client";

import MyContext from "./components/MyContext";

function Wrapper({ children }) {
  return <MyContext>{children}</MyContext>;
}

export default Wrapper;
