/*eslint-disable*/
import React from "react";
import Hero from "./Hero";
import Services from "./Services";
import Testinomials from "./Testinomials";
import WhyUs from "./WhyUs";

// reactstrap components
// core components

function IndexHeader({testimonials}) {
  return (
    <div>
      {/* Start of hero */}
      <Hero />
      {/* End of hero */}


      {/* start of why us  */}
      <WhyUs />

      {/* end of why us  */}
     

      {/* start of services  */}
      <Services/>
      {/* end of services */}

      {/* start of counter */}
      <Testinomials testimonials={testimonials}/>
      {/* end of counter */}

    </div>
  );
}

export default IndexHeader;