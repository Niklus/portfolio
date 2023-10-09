import { useState } from "react";

export const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMsg] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("https://deno-mailer.deno.dev/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        message,
      }),
    }).then((res) => {
      if (res.status === 200) {
        resetForm(); // Show Modal
        alert("Message Sent Successfully");
      } else {
        alert("Something went wrong");
      }
    });
  };

  const resetForm = () => {
    setName("");
    setEmail("");
    setMsg("");
  };

  return (
    <section id="contact" className="contact sec-pad dynamicBg">
      <div className="main-container">
        <h2 className="heading heading-sec heading-sec__mb-med">
          <span className="heading-sec__main heading-sec__main--lt">
            Contact
          </span>
          <span className="heading-sec__sub heading-sec__sub--lt">
            Feel free to reach out below. I am always open to new opportunities.
          </span>
        </h2>
        <div className="contact__form-container">
          <form action="#" className="contact__form" onSubmit={handleSubmit}>
            <div className="contact__form-field">
              <label className="contact__form-label" htmlFor="name">
                Name
              </label>
              <input
                required
                placeholder="Enter Your Name"
                type="text"
                className="contact__form-input"
                name="name"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className="contact__form-field">
              <label className="contact__form-label" htmlFor="email">
                Email
              </label>
              <input
                required
                placeholder="Enter Your Email"
                type="text"
                className="contact__form-input"
                name="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="contact__form-field">
              <label className="contact__form-label" htmlFor="message">
                Message
              </label>
              <textarea
                required
                cols="30"
                rows="10"
                className="contact__form-input"
                placeholder="Enter Your Message"
                name="message"
                id="message"
                value={message}
                onChange={(e) => setMsg(e.target.value)}
              ></textarea>
            </div>
            <button type="submit" className="btn btn--theme contact__btn">
              Submit
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
