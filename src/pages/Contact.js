import React from "react";
import styled from "styled-components";
import { PageHero } from "../components";
import contactImg from "../assets/contact.jpeg";

const Contact = () => {
  return (
    <main>
      <PageHero title='contact' />
      <Wrapper className='page section section-center'>
        {/* <div className='section-center something'> */}
        <img src={contactImg} alt='contact' />

        <form id='form'>
          <input id='name' type='text' placeholder='NAME' />
          <input id='email' type='text' placeholder='E-MAIL' />
          <textarea id='message' type='text' placeholder='MESSAGE'></textarea>
          <input type='submit' className='submit' value='Send Message' />
        </form>
      </Wrapper>
    </main>
  );
};
const Wrapper = styled.section`
  // .something {
  //   display: grid;
  // }

  img {
    width: 20rem;
    display: block;
    height: 365px;
    object-fit: cover;
  }
  input::-webkit-input-placeholder,
  textarea::-webkit-input-placeholder {
    color: var(--clr-chocolate-8);
    font-size: 0.875em;
  }

  form {
    position: relative;
    width: 20rem;
  }

  input {
    font-size: 0.875em;
    width: 20rem;
    height: 50px;
    padding: 0px 15px 0px 15px;

    background: transparent;
    outline: none;
    color: var(--clr-chocolate-8);

    border: 1px solid var(--clr-chocolate-8);
    border-bottom: none;
  }

  textarea {
    width: 20rem;
    max-width: 470px;
    height: 210px;
    max-height: 210px;
    padding: 15px;

    background: transparent;
    outline: none;

    font-family: "Poppins", sans-serif;
    color: var(--clr-chocolate-8);
    font-size: 0.875em;

    border: 1px solid var(--clr-chocolate-8);
  }

  .submit {
    font-family: "Poppins", sans-serif;
    text-transform: uppercase;
    font-size: 0.875em;
    color: var(--clr-chocolate-8);

    outline: none;
    cursor: pointer;

    border: 1px solid var(--clr-chocolate-8);

    transition: 1s;
  }

  .submit:hover {
    color: var(--clr-primary-2);
    background: var(--clr-chocolate-8);
    // background: rgba(237, 234, 232, 0.4);
  }

  @media (min-width: 992px) {
    display: grid;
    justify-items: center;
    // gap: 6rem;

    grid-template-columns: 1fr 1fr;

    form {
      justify-self: start;
    }
    // img {
    //   justify-self: end;
    // }
  }
`;

export default Contact;
