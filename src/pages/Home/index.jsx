import React from "react";
import Header from "../../compenent/Header";
import Main from "../../compenent/Main";
import Footer from "../../compenent/Footer";
export default function Home() {
  return (
    <>
      <div className="Header">
        <Header />
      </div>
      <div className="Main">
        <Main />
      </div>
      <div className="Footer">
        <Footer />
      </div>
    </>
  );
}
