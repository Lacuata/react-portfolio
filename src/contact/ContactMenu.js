import React, { useState } from "react";
import emailjs from "emailjs-com";
import DOMPurify from "dompurify";
// we using this 2 for basic security purposes to make our email or submation form more secured and less vulnerable

const ContactMenu = () => {
  // form submission
  const initialState = {
    name: "",
    email: "",
    message: "",
  };

  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [isSent, setIsSent] = useState(false);

  // handle change of forms
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  //   Handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    const validateErrors = validateForm();
    if (Object.keys(validateErrors).length > 0) {
      setErrors(validateErrors);
      return;
    }
    // while handling submit set true
    setIsLoading(true);

    // update our variables
    const { name, email, message } = formData;
    //sanitizize our data
    const sanitizedData = {
      name: "Name: " + DOMPurify.sanitize(name),
      email: "Email: " + DOMPurify.sanitize(email),
      message: "Message: " + DOMPurify.sanitize(message),
    };
    // referrence constant called service for connecting our form element later to email.js service
    // process.env is our .env.local
    const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const templateID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const userID = process.env.REACT_APP_EMAILJS_USER_ID;

    emailjs
      .send(serviceId, templateID, sanitizedData, userID)
      .then((response) => {
        console.log("Email is sent successfullu!", response.text);
        setFormData(initialState);
        setErrors({});
        setIsSent(true);
      })
      .catch((error) => {
        console.error("Email sending failed", error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const validateForm = () => {
    const { name, email, message } = formData;
    const errors = {};
    // if name is doesn't exist
    if (!name.trim()) {
      errors.name = "Name is required";
    }
    // if email is doesn't exist
    if (!email.trim()) {
      errors.email = "Email is required";
    } else if (!isValidEmail(email)) {
      // if email is not vvalid
      errors.email = "Invalid email format";
    }

    if (!message.trim()) {
      errors.message = "Message is required";
    }

    return errors;
  };

  const isValidEmail = (value) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; //remove all potential threats
    return emailRegex.test(value);
  };

  return (
    <div className="contact-menu">
      {!isSent && (
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={errors.name ? "errors" : ""}
              disabled={isLoading}
              placeholder="Name"
            />
            {errors.name && (
              // so if there error it's gonna display
              <span className="error-message">{errors.name}</span>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={errors.email ? "errors" : ""}
              disabled={isLoading}
              placeholder="Email"
            />
            {errors.email && (
              // so if there error it's gonna display
              <span className="error-message">{errors.email}</span>
            )}
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea
              type="text"
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className={errors.message ? "errors" : ""}
              disabled={isLoading}
              placeholder="Message"
            ></textarea>
            {errors.message && (
              // so if there error it's gonna display
              <span className="error-message">{errors.message}</span>
            )}
          </div>
          {/* isLoading is true sending else Submit and disabled whenever isLoading is true  */}
          <button type="submit" disabled={isLoading}>
            {isLoading ? "SENDING..." : "SUBMIT"}
          </button>
        </form>
      )}
      {isSent && (
        //show if we successfully sent a message to email
        <div className="success-message">
          <p>SUCESS!</p>
          <p>Your message has been successfully sent!</p>
        </div>
      )}
    </div>
  );
};

export default ContactMenu;
