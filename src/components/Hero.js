import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import heroBcg from "../assets/hero-bcg.jpeg";

const Hero = () => {
  return (
    <Wrapper className='section-center'>
      <article className='content'>
        <h3 className='hero-title-2'>You are</h3>
        <h1 className='hero-title-1'>Beautiful</h1>
        <Link to='/products' className='btn hero-btn'>
          shop now
        </Link>
      </article>
      {/* <article className='img-container'>
        <img src={heroBcg} alt='' />
      </article> */}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  min-height: 60vh;
  display: grid;
  justify-content: center;
  align-items: center;
  background: url(${heroBcg});
  // background-size: cover;
  background-position: top;

  max-width: var(--max-width);

  .hero-title-1 {
    font-family: "Forum", cursive;
  }

  p {
    line-height: 2;
    max-width: 45em;
    margin-bottom: 2rem;
    color: var(--clr-chocolate-6);
    font-size: 1rem;
  }
  .hero-btn {
    padding: 0.75rem 1.5rem;
    font-size: 1rem;
  }
  @media (min-width: 992px) {
    height: 80vh;
    grid-template-columns: 1fr 1fr;
    background-size: cover;
    background-position: center;
    align-items: center;

    .content {
      justify-self: center;
    }

    // .content {
    //   padding-left: 5rem;
    //   padding-top: 12rem;
    // }

    h1 {
      margin-bottom: 2rem;
    }
    p {
      font-size: 1.25rem;
    }

    .main-img {
      width: 100%;
      height: 500px;
      position: relative;
      display: block;
      object-fit: cover;
    }
  }
`;

export default Hero;
