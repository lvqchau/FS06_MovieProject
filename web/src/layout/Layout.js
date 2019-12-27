import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Layout = props => {
  return (
    <div style={{
      position: 'relative',
      minHeight: '100vh'}}>
      <Header />
      <div style={{ paddingBottom: '15em'}}>
        {props.children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;