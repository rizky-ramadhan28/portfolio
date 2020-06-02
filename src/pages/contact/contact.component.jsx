import React from "react";

import "./contact.styles.css";

const ContactPage = () => (
  <div className="card">
    <div className="card-header bg-dark text-white">Contact</div>

    <div className="card-body">
      <div className="row">
        <div className="col-12">
          <h4>Author's Contact</h4>

          <hr />

          <div className="card mb-3">
            <div className="row no-gutters">
              <div className="col-12">
                <div className="card-body">
                  <p className="card-text">
                    <img
                      src={require(`../../assets/icons/envelope-fill.svg`)}
                      alt="Email"
                      width="32"
                      height="32"
                      className="mr-2"
                    />{" "}
                    <span>rizky_ramadhan28@yahoo.com</span>
                  </p>

                  <p className="card-text">
                    <small className="text-muted">
                      Menerima undangan untuk internship atau bekerja paruh
                      waktu.
                    </small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default ContactPage;
