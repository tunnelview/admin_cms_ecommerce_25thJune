import React, { Children } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

export const MainLayout = ({ children }) => {
  return (
    <div>
      {/* header */}
      <Header />

      {/* mainbody */}
      <div className="main"> {children}</div>

      {/* footer */}
      <Footer />
    </div>
  );
};
