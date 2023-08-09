import React, { useState, useEffect, useRef } from "react";
import Button from "../button/Button";
import FormInput from "../input/Input";
import TextArea from "../input/TextArea";
import axios from "axios";
import Swal from "sweetalert2";
import "./form.css";

const Form = () => {
  const errRef = useRef();
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone_number, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setErrMsg("");
  }, [email, first_name, last_name, phone_number, message]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!first_name || !last_name || !email || !phone_number || !message) {
      setErrMsg("Please fill all the fields.");
      return;
    }
    setLoading(true);
    try {
      const response = await axios.post(
        "https://imaginative-travels.onrender.com/contact",
        JSON.stringify({
          first_name,
          last_name,
          email,
          phone_number,
          message,
        }),
        {
          headers: { "Content-Type": "application/json" },
        }
      );
      if (response.status === 200) {
        setLoading(false);
        setErrMsg("");
        setFirstName("");
        setLastName("");
        setEmail("");
        setPhoneNumber("");
        setMessage("");
        Swal.fire(
          "Good job!",
          "Your form has been submitted successfully.",
          "success"
        );
      }
    } catch (error) {
      setErrMsg("Something went wrong, please try again.");
    }
  };

  return (
    <>
      <section>
        <p
          ref={errRef}
          className={errMsg ? "errmsg" : "offscreen"}
          aria-live="assertive"
        >
          {errMsg}
        </p>
        <form onSubmit={handleSubmit}>
          <FormInput
            examplefor="exampleInputFullname"
            formLabel="form-label"
            label="Fullname"
            type="text"
            formControl="form-control"
            inputId="exampleInputFullname"
            required
            value={first_name + " " + last_name}
            onChange={(e) => {
              const fullName = e.target.value;
              const nameParts = fullName.trim().split(" ");
              setFirstName(nameParts[0]);
              setLastName(nameParts.slice(1).join(" "));
            }}
          />
          <FormInput
            examplefor="exampleInputEmail1"
            formLabel="form-label"
            label="Email address"
            type="email"
            formControl="form-control"
            inputId="exampleInputEmail1"
            ariaDes="emailHelp"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <FormInput
            examplefor="exampleInputPhoneNumber"
            formLabel="form-label"
            label="Phone Number"
            type="tel"
            formControl="form-control"
            inputId="exampleInputPhoneNumber"
            required
            value={phone_number}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
          <TextArea
            examplefor="exampleFormControlTextarea1"
            formLabel="form-label"
            label="Message"
            formControl="form-control"
            inputId="exampleFormControlTextarea1"
            row="6"
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <Button
            type="submit"
            text={loading ? "loading" : "Submit"}
            backgroundColor="#4C054E"
            width="170px"
          />
        </form>
      </section>
    </>
  );
};
export default Form;
