import React from "react";
import PackageCard from "./PackageCard";
import SquareButton from "./SquareButton";

function Packages() {
  const blueColor = {
    backgroundColor: `#0057DA`,
    border: `1px solid #0057DA`,
  };
  const redColor = {
    backgroundColor: `#EF0633`,
    border: `1px solid #EF0633`,
  };
  const greenColor = {
    backgroundColor: `#00BA34`,
    border: `1px solid #00BA34`,
  };
  return (
    <section className="packages">
      <h1 className="packages__title sub--headings">Our Packages</h1>
      <div className="packages__divider sub--divider" />
      <div className="packages__flex-cards">
        <PackageCard style={blueColor} />
        <PackageCard
          data_aos="fade-up-right"
          data_aos_delay="750"
          data_aos_duration="1000"
          style={redColor}
        />
        <PackageCard style={greenColor} />
      </div>
      <div className="packages__cta">
        <SquareButton content="View more packages" />
      </div>
    </section>
  );
}

export default Packages;
