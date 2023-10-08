import React from "react";
import Button from "../helpers/button/Button";
import Heading from "../helpers/heading/Heading";
import Container from "../helpers/wrapper/Container";
import styled from "./AboutIntro.module.css";

const AboutIntro = () => {
  const heading = (
    <>
      DISCOVER <span>CUBA</span>
    </>
  );
  return (
    <section className={styled.intro} id="about">
      <Container className={styled.intro__grid}>
        <article className={styled.intro__content}>
          <Heading className="medium" heading={heading} />
          <p className="text">
          Making Connections through Art and Music
          8 Days tour
          </p>
          <p className="text">
          Sustainable Community Building Extension
          14 Days tour
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
