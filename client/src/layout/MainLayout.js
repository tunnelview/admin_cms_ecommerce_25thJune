import React, { Children } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

export const MainLayout = ({ children }) => {
  return (
    <div>
      {/* header */}
      <Header />

      {/* mainbody */}
      <div className="main"> {Children}</div>

      {/* footer */}
      <Footer />
    </div>
  );
};
