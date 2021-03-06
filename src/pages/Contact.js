import React from "react";

function Contact() {
  return (
    <div className="contact-footer">
      <br />
      <h4>
        email me at:{" "}
        <a href="mailto:jbenley1011@gmai.com">jbentley1011@gmail.com</a>
      </h4>
      <br />
      {/* <h4>Call me at (512)-736-6484.</h4> */}
      <br />
      <h4>
        See my LinkedIn page here:
        <a
          href="https://www.linkedin.com/in/jonathan-bentley-94a127190/"
          target="_blank"
          rel="noopener noreferrer"
          class="btn btn-light"
        >
          {" "}
          here
        </a>
      </h4>
      <br />
      <h4>
        Take a look at my GitHub profile:
        <a
          href="https://github.com/letsgitthis"
          target="_blank"
          rel="noopener noreferrer"
          class="btn btn-light"
        >
          {" "}
          here
        </a>
      </h4>
    </div>
  );
}

export default Contact;
