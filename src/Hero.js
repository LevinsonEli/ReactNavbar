import React from "react";
import phoneImg from "./images/phone.svg";
import { useGlobalContext } from "./context";

const Hero = () => {
  const { closeSubmenu } = useGlobalContext();
  return (
    <section className="hero" onMouseOver={closeSubmenu}>
      <div className="hero-center">
        <article className="hero-info">
          <h1>The Main Idea Sentence</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis,
            deleniti ipsam? Ut necessitatibus animi culpa. Qui, iure earum non
            error iusto ut fugit, molestias facilis autem animi ad voluptates
            doloribus.
          </p>
          <button className="btn">Start now</button>
        </article>
        <article className="hero-images">
          <img src={phoneImg} className="phone-img" alt="phone" />
        </article>
      </div>
    </section>
  );
};

export default Hero;
