import React, { useState } from "react";
import Footer from "../Footer/page";
import Header from "../Header/page";

const Layout = () => {
  const [isAuth, setIsAuth] = useState<boolean>(false);
  return (
    <div>
      <Header />
      main
      <Footer />
    </div>
  );
};

export default Layout;
