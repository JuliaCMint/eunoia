import React from "react";
import styled from "styled-components";
import { services } from "../utils/constants";
import servicesBcg from "../assets/services-bcg.jpeg";

const Services = () => {
  return (
    <Wrapper>
      <div className='section-center'>
        <article className='header'>
          <h3>
            selective cosmetics and perfumery <br />
            for special you
          </h3>
        </article>
        <div className='services-center'>
          {services.map((service) => {
            const { id, icon, title, text } = service;
            return (
              <article key={id} className='service'>
                {/* <span className='icon'>{icon}</span> */}
                <h4>{title}</h4>
                <p>{text}</p>
              </article>
            );
          })}
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  h3,
  h4 {
    color: var(--clr-primary-10);
  }
  padding: 5rem 0;

  background: linear-gradient(rgb(35, 25, 20, 0.4), rgb(174, 156, 149, 0.4)),
    url(${servicesBcg});
  background-size: cover;
  background-position: center;

  .header h3 {
    margin-bottom: 2rem;
    text-align: right;
  }
  // p {
  //   margin-bottom: 0;
  //   line-height: 1.8;
  //   color: var(--clr-primary-3);
  // }
  .services-center {
    margin-top: 4rem;
    display: grid;
    gap: 2.5rem;
  }
  .service {
    background: rgba(142, 117, 107, 0.8);
    text-align: center;
    padding: 2.5rem 2rem;
    p {
      color: var(--clr-primary-10);
    }
  }
  span {
    width: 4rem;
    height: 4rem;
    display: grid;
    margin: 0 auto;
    place-items: center;
    margin-bottom: 1rem;
    border-radius: 50%;
    background: var(--clr-primary-10);
    color: var(--clr-primary-1);
    svg {
      font-size: 2rem;
    }
  }
  @media (min-width: 992px) {
    .header {
      display: grid;
      grid-template-columns: 1fr;
    }
  }
  @media (min-width: 576px) {
    .services-center {
      grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
    }
  }
  @media (min-width: 1280px) {
    padding: 0;
    .section-center {
      transform: translateY(5rem);
    }
  }
`;
export default Services;
