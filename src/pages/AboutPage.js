import React from "react";
import styled from "styled-components";
import { PageHero } from "../components";
import aboutImg from "../assets/about.jpeg";

const AboutPage = () => {
  return (
    <main>
      <PageHero title='about' />
      <Wrapper className='page section section-center'>
        <div className='img-container'>
          <img src={aboutImg} alt='lips' />
        </div>
        <article>
          <div className='title'>
            <h2>our story</h2>
            <div className='underline'></div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui
              dolorem similique repudiandae odit perspiciatis optio facere quam
              veniam ad cum? Qui nisi libero vel, aut voluptas assumenda dolorum
              repellat dolorem! Tempora voluptate, magni odio esse vitae tenetur
              blanditiis dolore quo?
            </p>
          </div>
        </article>
      </Wrapper>
    </main>
  );
};

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;

  img {
    display: block;
    height: 30rem;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    // color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
    img {
      width: 100%;
    }
  }
`;
export default AboutPage;
