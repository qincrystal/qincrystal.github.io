import React, { useState } from "react";
import axios from "axios";

/*component for message form that will replace message link in the future. First have to figure
out the serverside of things
*/
function MessageForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const resetForm = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setMessage("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const path = "http://localhost:80/website-mail/index.php";
    axios
      .post(path, {
        first: firstName,
        last: lastName,
        mail: email,
        msg: message,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((e) => {
        console.log(e);
      });

    resetForm();
  };

  return (
    <form className="container-fluid" onSubmit={handleSubmit}>
      <div className="row">
        <div className="form-group col-xs-3 col-sm-8 col-md-4">
          <label className="montserrat weight500">First Name</label>
          <br></br>
          <input
            className="form-control"
            name="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="First Name"
            type="text"
            required
          />{" "}
        </div>
        <div className="form-group col-xs-3 col-sm-8 col-md-4">
          <label className="montserrat weight500">Last Name</label>
          <br></br>
          <input
            className="form-control"
            name="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Last Name"
            type="text"
            required
          />
        </div>
      </div>
      <div className="row">
        <div className="form-group col-xs-3  col-sm-8 col-md-8">
          <label className="montserrat weight500">Email</label>
          <br></br>
          <input
            className="form-control"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            type="email"
            required
            size="40"
          />
        </div>
      </div>
      <div className="row">
        <div className="form-group col-xs-3 col-sm-8 col-md-8">
          <label className="montserrat weight500">Message</label>
          <br></br>
          <textarea
            className="form-control"
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Message"
            type="text"
            cols="65"
            rows="5"
          />
        </div>
      </div>
      <div id="submit-button">
        <button
          className=" btn-lg m-3 montserrat weight800 black no-outline "
          type="submit"
        >
          Send Message
        </button>
      </div>
    </form>
  );
}

export default MessageForm;
