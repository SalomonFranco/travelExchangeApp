import React from "react";
import styled from "./Facilities.module.css";
import boxing from "../../assets/perumachupicchu.mp4";
import Heading from "../helpers/heading/Heading";
import Container from "../helpers/wrapper/Container";

const Facilities = () => {
  const heading = (
    <>
      Uncover <span>Peru's</span>richness.
    </>
  );

  return (
    <section className={styled.facility} id="facilities">
      <video src={boxing} autoPlay loop muted />
      {/* Video by cottonbro on pexels */}
      <div className={styled.facility__overlay}>
        <Container>
          <article className={styled.facility__content}>
            <Heading className="medium" heading={heading} />
            <p className="text">
            Peru's richness lies in its diverse geography, from the Andes to the Amazon, fostering unique ecosystems, resources, and cultural heritage.
            </p>
          </article>
        </Container>
      </div>
    </section>
  );
};

export default Facilities;
