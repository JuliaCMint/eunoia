import React from "react";
import { NewsLetter, FeaturedProducts, Hero, Services } from "../components";
import FooterHero from "../components/FooterHero";

const HomePage = () => {
  return (
    <main>
      <Hero />
      <FeaturedProducts />
      <Services />
      <NewsLetter />
      <FooterHero />
    </main>
  );
};

export default HomePage;
