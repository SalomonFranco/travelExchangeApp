import React from "react";
import styled from "./Hero.module.css";
import Navbar from "../nav/Navbar";
import Container from "../helpers/wrapper/Container";
import Heading from "../helpers/heading/Heading";
import Button from "../helpers/button/Button";

const Hero = () => {
  const heading = (
    <>
      Discover <span> the beauty </span> of  <span> Latin america</span>
    </>
  );

  return (
    <section className={styled.hero} id="home">
      <Container>
        <Navbar />

        <div className={styled["hero__content--container"]}>
          <article className={styled.hero__content}>
            <Heading className="large" heading={heading} />
            <p className="text">
            We believe in providing safe and welcoming spaces for students, empowering them to feel confident and comfortable while immersing themselves in diverse cultures. Through our Cuba and Peru programs, we aim to inspire young minds to lead healthy, active lifestyles while exploring the worlds of art, music, sustainability, and community building.
            </p>

            <Button className="primary" link="#membership">
             Join us
            </Button>
          </article>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
