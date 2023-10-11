import React from "react";
import styled from "./Locations.module.css";
import Heading from "../helpers/heading/Heading";
import Container from "../helpers/wrapper/Container";
import Item from "../helpers/item/Item";
import { programLocations } from "./gymLocations";

const Locations = () => {
  // map through the programLocations array and render a Item component for each location
  const locations = programLocations.map((location) => {
    return <Item key={location.id} item={location} className="location" />;
  });

  return (
    <section className={styled.locations} id="locations">
      <Container>
        <article className={styled.locations__content}>
          <Heading className="medium--dark" heading="Vibrant cultures" />
          <p className="text--darkblack">
          Rich history, and breathtaking landscapes converge.

          </p>
        </article>

        <div className="text--darkblack">
        <div className={styled.locations__list}>{locations}</div></div>
      </Container>
    </section>
  );
};

export default Locations;
