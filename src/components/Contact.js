import React from "react";

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted");
  };
  return (
    <div className="contact-form-container">
      <h1 role="heading">Contact</h1>
      <form className="contact-form" onSubmit={handleSubmit}>
        <label htmlFor="name" role="label">Name</label>
        <input type="text" placeholder="Name" id="name" />
        <label htmlFor="email" role="label">Email</label>
        <input type="email" placeholder="Email" id="email" />
        <button className="contact-form-button" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Contact;
