import React from "react";
import Gallery from "../Gallery/Gallery";
import Services from "../Services/Services";
import "./Home.css";

function Home() {
  return (
    <div>
      <section class="hero bg-cover bg-center py-5" id="bg">
        <div class="container py-5 my-5 z-index-20 position-relative">
          <div class="row py-lg-5 mt-5">
            <div class="col-md-8 text-white">
              <h2 class=" text-xl fw-bold">
                Building <span class="text-danger">Kenya</span>
              </h2>

              <h2 class="h4 fw-normal mb-5">Siran Construction Limited</h2>
              <p class="text-shadow">
                Siran construction limited is a construction company formed on
                August 2022.The Company is operating and located in Kenya. The
                company offers engineering construction and construction project
                management. Siran construction limited is dedicated to
                organizations or individuals seeking construction services.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Gallery />
      <Services />
      {/* <section class="py-5 bg-light">
        <div class="container py-5">
          <header class="mb-5">
            <p class="fw-bold text-primary text-uppercase letter-spacing-3">
              Innovative solutions
            </p>
            <h2 class="h3 lined">To boost your creative projects</h2>
          </header>
          <p class="lead text-muted">
            Lorem ipsum dolor sit amet,{" "}
            <strong class="text-dark">consetetur sadipscing elitr, </strong> sed
            diam nonumy eirmod tempor invidunt ut labore et dolore magna
            aliquyam erat, sed diam voluptua. At vero eos et accusam et justo
            duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata
            sanctus.
          </p>
          <p class="text-muted">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est.{" "}
          </p>
          <p class="text-muted mb-0">
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore
            et dolore magna aliquyam erat, sed diam voluptua. At vero eos et
            accusam et justo duo dolores et ea rebum.
          </p>
        </div>
      </section> */}
    </div>
  );
}

export default Home;
