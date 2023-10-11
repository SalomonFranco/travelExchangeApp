import React from "react";
import Button from "../helpers/button/Button";
import Heading from "../helpers/heading/Heading";
import Container from "../helpers/wrapper/Container";
import styled from "./AboutIntro.module.css";

const AboutIntro = () => {
  const heading = (
    <>
      About <span>us</span>
    </>
  );
  return (
    <section className={styled.intro} id="about">
      <Container className={styled.intro__grid}>
        <article className={styled.intro__content}>
          <Heading className="medium" heading={heading} />
          <p className="text">
          Creating Ties fosters cultural connections through transformative journeys. 
          </p>
          <p className="text">
          Our immersive programs in Cuba and Peru blend exploration, art, and community, creating lasting bonds across continents.
          </p>
          <Button link="#membership" className="primary">
            Join Creating Ties
          </Button>
        </article>
      </Container>
    </section>
  );
};

export default AboutIntro;
