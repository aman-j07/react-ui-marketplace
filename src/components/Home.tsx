import React from "react";
import ProductsGallery from "./ProductsGallery";

function Home() {
  return (
    <main>
      <section className="hero row--centeraligned row--between">
        <div className="hero__content">
          <span className="content__sm">WE'RE STILL</span>
          <span className="content__lg">Filling up <br/>the spaces.</span>
          <div>
            <button className="btn btn--primary">Explore marketplace</button>{" "}
            <button className="btn btn--link">See Top Deals</button>
          </div>
        </div>
        <img
          className="hero__image"
          src="assets/images/Rectangle 10342.png"
          alt="person holding smartphone"
        />
      </section>
      <ProductsGallery title="Our Top Deals"/>
      <ProductsGallery title="Best Selling Product"/>
      <section className="newsletter">
        <div className="newsletter__wrapper">
          <h2 className="newsletter__head">Subscribe to Our Newsletter</h2>
          <p  className="newsletter__subhead">Don't miss out on our top deals! Dont worry we will not spam you.</p>
          <div className="inpgrp"><input type='text' placeholder="Enter Your Email Here"/><button className="btn btn--primary">Subscribe</button></div>
        </div>
      </section>
    </main>
  );
}

export default Home;
