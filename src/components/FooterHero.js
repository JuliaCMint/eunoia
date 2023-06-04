import React from "react";
import styled from "styled-components";
import heroFooter from "../assets/footer-hero.jpeg";

const FooterHero = () => {
  return (
    <Wrapper>
      <div className='section-center'>
        <article className='header'>
          <p>
            "The best and most beautiful things in the world cannot be seen or
            even touched <br /> —they must be felt with the heart."
          </p>
          <h3>- Hellen Keller</h3>
        </article>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  display: grid;
  background: linear-gradient(rgb(174, 156, 149, 0.2), rgb(35, 25, 20, 0.2)),
    url(${heroFooter});
  background-size: cover;
  background-position: center;

  .header {
    padding: 10rem 1rem;
  }
  .header h2 {
    font-family: "Forum", cursive;
    color: var(--clr-chocolate-2);
    text-align: center;
    margin-bottom: 2rem;
  }
  .header h3 {
    text-align: center;
    color: var(--clr-chocolate-2);
  }
  .header p {
    color: var(--clr-chocolate-2);
    font-size: 1.5rem;
    text-align: center;
  }
  .overlay {
    background-color: rgba(0, 0, 0, 0.5);
    position: fixed;
    display: none;
    width: 100%;
    height: 100%;
    z-index: 2;
  }
  @media (min-width: 992px) {
    .header {
      padding: 15rem 1rem;
    }
    .header h3 {
      text-align: right;
    }
    .header p {
      text-align: right;
    }
  }
`;
export default FooterHero;
