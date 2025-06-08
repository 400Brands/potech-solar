import React, { useEffect } from "react";
import Layout from "./layout/main";
import PageRoutes from "./router/page-routes";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-out-cubic",
      disable: "mobile",
      once: true,
    });
  }, []);

  return (
    <Layout>
      <PageRoutes />
    </Layout>
  );
}

export default App;