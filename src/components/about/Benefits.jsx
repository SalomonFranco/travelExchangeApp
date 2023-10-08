import React from "react";
import styled from "./Benefits.module.css";
import Heading from "../helpers/heading/Heading";
import Container from "../helpers/wrapper/Container";
import Button from "../helpers/button/Button";

const Benefits = () => {
  const heading = (
    <>
      discover <span>peru!</span>
    </>
  );
  return (
    <section className={styled.benefits__container}>
      <div className={styled.benefits}>
        <Container className={styled.benefits__content}>
          <article className={styled["benefits__content--intro"]}>
            <Heading className="medium" heading={heading} />
            <p className="text">
              The land of the Sun. Enjoy the hospitality of the people, the contrasting geographical regions and the ancient archeological sites such as Machu Picchu, architectural marvel built by the Incas whose empire expanded through most of South America.

            </p>

            <p className="text">
            Come to Peru and discover a gem!
            </p>
            <Button link="#locations" className="primary">
              See Locations
            </Button>
          </article>
        </Container>

        <figure className={styled.benefits__image}>
          <img
            src="https://images.pexels.com/photos/3879058/pexels-photo-3879058.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="llamasinmachupichu"
          />
        </figure>
      </div>
    </section>
  );
};

export default Benefits;
