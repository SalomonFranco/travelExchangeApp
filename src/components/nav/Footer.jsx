import React from "react";
import styled from "./Footer.module.css";
import { HashLink as Link } from "react-router-hash-link";
import Container from "../helpers/wrapper/Container";
import Heading from "../helpers/heading/Heading";

import {
  FaFacebookSquare,
  FaYoutubeSquare,
  FaInstagramSquare,
} from "react-icons/fa";

const Footer = () => {
  const facebookLink = "https://www.facebook.com/Martha235";
  const youtubeLink = "https://www.youtube.com/@Creatingties/about";
  const instagramLink = "https://www.instagram.com/marthahayden/"
  return (
    <footer className={styled.footer__container}>
      <Container className={styled.footer}>
        <ul className={styled.footer__links}>
          <Heading className="small--dark" heading="Links" />
          <li>
            <Link smooth to="#home">
              Home
            </Link>
          </li>

          <li>
            <Link smooth to="#about">
              About
            </Link>
          </li>

          <li>
            <Link smooth to="#programs">
              Programs
            </Link>
          </li>

          <li>
            <Link smooth to="#locations">
              Locations
            </Link>
          </li>
        </ul>

        <article>
          <Heading className="small--dark" heading="get in touch" />
          <ul className={styled.footer__contact}>
            <div className={styled["footer__contact--info"]}>
              <h3>Email</h3>
              <li>
                <p>Martha Hayden</p>
                <p>martha235@aol.com</p>
              </li>              
            </div>
          </ul>
        </article>

        <div className={styled.footer__icons}>
          <Heading className="small--dark" heading="social media" />
          <div className={styled["footer__icons--icons"]}>
          <a href={facebookLink} target="_blank" rel="noopener noreferrer">
              <FaFacebookSquare size={35} color="var(--secondary)" />
            </a>
            <a href={youtubeLink} target="_blank" rel="noopener noreferrer">
              <FaYoutubeSquare size={35} color="var(--secondary)" />
            </a>
            <a href={instagramLink} target="_blank" rel="noopener noreferrer">
              <FaInstagramSquare size={35} color="var(--secondary)" />
            </a>
          </div>
        </div>
      </Container>

      <ul className={styled.footer__logo}>
        <Heading className="small" heading="creating ties" />
        <li>
        Made with ❤ by {" "}
          <a
            target="_blank"
            href="https://github.com/SalomonFranco"
            rel="noreferrer"
          >
            Salomon Franco.
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
