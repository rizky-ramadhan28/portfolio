import React from "react";

import "./homepage.styles.css";

const Homepage = () => (
  <div className="card">
    <div className="card-header bg-dark text-white">Author's Profile</div>

    <div className="card-body">
      <div className="row">
        <div className="col-12 author-information">
          <img
            src="https://images.unsplash.com/photo-1517148815978-75f6acaaf32c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80"
            className="img-fluid rounded"
            alt="Author's Profile"
          />

          <p className="text-muted text-center mt-2">
            <small>Photo by Fatos Bytyqi on Unsplash</small>
          </p>
        </div>

        <div className="author-bio">
          <h5 className="card-title">Rizky Ramadhan</h5>
          <h6 className="card-subtitle mb-4 text-muted">
            Professional Web Developer
          </h6>

          <hr />

          <p className="card-text text-justify">
            Rizky Ramadhan adalah seorang programmer yang berfokus kepada web
            development. Berawal dari kecintaannya pada pemrograman sejak di
            bangku SMK, ia pun mempelajari berbagai bahasa pemrograman dan
            framework yang populer.
          </p>

          <p className="card-text text-justify">
            Sebagai seorang web developer, ia menekuni{" "}
            <span className="text-primary font-weight-bold">React</span> dan{" "}
            <span className="text-success font-weight-bold">Vue JS</span>{" "}
            sebagai alat untuk digunakan pada bagian front end. Di luar{" "}
            <span className="text-warning font-weight-bold">Javascript</span>,
            ia juga memiliki pengalaman dengan{" "}
            <span className="text-danger font-weight-bold">Laravel</span>.
          </p>

          <p className="card-text text-justify">
            Rizky Ramadhan adalah seorang yang mengerti bahwa belajar itu
            dilakukan seumur hidup, artinya ia tidak akan segan-segan untuk
            mempelajari hal-hal baru karena itu adalah kenikmatan tersendiri.
          </p>

          <a href="https://google.com" className="card-link">
            Download CV
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default Homepage;
