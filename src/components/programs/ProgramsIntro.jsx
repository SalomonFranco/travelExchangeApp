import React from "react";
import styled from "./ProgramsIntro.module.css";
import Container from "../helpers/wrapper/Container";
import womanRunning from "../../assets/llama.png";
import Heading from "../helpers/heading/Heading";
import Button from "../helpers/button/Button";

const ProgramsIntro = () => {
  const heading = (
    <>
      student travel and <span>service learning programs</span>
    </>
  );

  return (
    <section className={styled.intro} id="programs">
      <Container className={styled.intro__content}>
        <article className={styled["intro__content--info"]}>
          <Heading className="medium" heading={heading} />
          <p className="text">
          At Creating Ties, our team of experienced guides and logistical experts is the backbone of every journey.
          </p>

          <p className="text">
          Our guides possess an intimate knowledge of the destinations, including Cuba and Peru, ensuring that each tour is not just a visit but an immersive experience. With a passion for storytelling, cultural nuances, and historical insights, our guides bring the destinations to life, making the journey both educational and engaging.
          </p>
          <Button className="primary" link="#classes">
            See Programs
          </Button>
        </article>

        <figure className={styled["intro__content--image"]}>
          <img src={womanRunning} alt="Woman running in gym attire" />
        </figure>
      </Container>
    </section>
  );
};

export default ProgramsIntro;
