import React from "react";
import DateInfo from "./DateInfo";
import MIS from "./MIS";
import Building from "./Building";

import "./styles.css";

const Home = () => {
  return (
    <div className="home">
      <DateInfo />
      <MIS />
      <Building />
    </div>
  );
};
export default Home;
