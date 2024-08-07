import React from "react";
import Header from "../header/Header";

const Contact = () => {
  return (
    <section className="contact" id="contact">
      <Header header={"Contact Me 😀"} />
      <article>
        <ul
          className="flex-center-center"
          style={{ justifyContent: "space-evenly" }}
        >
          <li>
            <a
              href="https://github.com/tushar451997"
              target={"_blank"}
              rel="noreferrer"
            >
              <i className="icon fa-brands fa-github"></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/tushar-nehe-73abb916a/"
              target={"_blank"}
              rel="noreferrer"
            >
              <i className="icon fa-brands fa-linkedin"></i>
            </a>
          </li>
        </ul>
        <div style={{ textAlign: "center", marginTop: "10px" }}>
          <p>
            <strong>Email:</strong> tusharnehe2017@gmail.com
          </p>
          <p>
            <strong>Phone 1:</strong> 9096088290
          </p>
          <p>
            <strong>Phone 2:</strong> 7755964475
          </p>
          <strong>Just Send me don't hesitate 😉</strong>
        </div>
      </article>
    </section>
  );
};

export default Contact;
