import React from "react";
import styled from "styled-components";

const NewsLetter = () => {
  return (
    <Wrapper>
      <div className='section-center'>
        <h3>Join our newsletter and get 20% off</h3>
        <div className='content'>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam, aut.
          </p>
          <form className='contact-form'>
            <input
              type='email'
              className='form-input'
              placeholder='enter email'
            />
            <button type='submit' className='submit-btn'>
              subscribe
            </button>
          </form>
        </div>
      </div>
    </Wrapper>
  );
};
const Wrapper = styled.section`
  // background: #37281f;
  // margin: 10rem 0;
  padding: 5rem 0;
  h3 {
    text-transform: none;
  }
  p {
    line-height: 2;
    max-width: 45em;
    color: var(--clr-grey-5);
  }
  .contact-form {
    width: 90vw;
    max-width: 500px;
    display: grid;
    grid-template-columns: 1fr auto;
  }

  .form-input,
  .submit-btn {
    font-size: 0.875em;
    padding: 0.5rem 1rem;
    border: 1px solid var(--clr-chocolate-8);
  }
  .form-input {
    border-right: none;
    color: var(--clr-chocolate-8);
  }
  .form-input::placeholder {
    color: var(--clr-chocolate-8);
    text-transform: capitalize;
  }
  .submit-btn {
    background: var(--clr-white);
    color: var(--clr-chocolate-6);
    text-transform: uppercase;
    letter-spacing: var(--spacing);
    cursor: pointer;
    transition: var(--transition);
  }
  .submit-btn:hover {
    color: var(--clr-primary-2);
    background: var(--clr-chocolate-8);
  }
  @media (min-width: 992px) {
    .content {
      display: grid;
      grid-template-columns: 1fr 1fr;
      align-items: center;
      gap: 8rem;
      margin-top: 2rem;
    }
    p {
      margin-bottom: 0;
    }
  }
  @media (min-width: 1280px) {
    padding: 15rem 0;
  }
`;

export default NewsLetter;
