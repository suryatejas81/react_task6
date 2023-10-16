import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_xwju52i",
        "template_bj3hng6",
        form.current,
        "ZBtnUqO5sH6I4Luyn"
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Sent Successfully");
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="contact-form">
      <form className="form" ref={form} onSubmit={sendEmail}>
        <br />
        <div className="form-group">
          <label for="uname">Name</label>
          <input
            type="text"
            class="form-control"
            id="uname"
            name="user_name"
            placeholder="Name"
          />
        </div>
        <br />
        <div className="form-group">
          <label for="exampleInputEmail1">Email</label>
          <input
            class="form-control"
            id="exampleInputEmail1"
            type="email"
            name="user_email"
            placeholder="Email"
          />
        </div>
        <br />
        <div className="form-group">
          <label for="msg" class="form-check-label">
            Message
          </label>
          <textarea
            id="msg"
            class="form-control"
            name="message"
            placeholder="Message"
          />
        </div>
        <br />
        <div class="text-center form-group form-check">
          <input type="submit" class="btn btn-primary" value="Send" />
        </div>
        <br />
      </form>
    </div>
  );
}
export default Contact;