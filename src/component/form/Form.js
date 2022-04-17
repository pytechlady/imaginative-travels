import React from "react";
import Button from "../button/Button";
import FormInput from "../input/Input";
import TextArea from "../input/TextArea";

const Form = () => {
  return (
    <form>
      <FormInput
        examplefor="exampleInputFullname"
        formLabel="form-label"
        label="Fullname"
        type="text"
        formControl="form-control"
        inputId="exampleInputFullname"
      />
      <FormInput
        examplefor="exampleInputEmail1"
        formLabel="form-label"
        label="Email address"
        type="email"
        formControl="form-control"
        inputId="exampleInputEmail1"
        ariaDes="emailHelp"
      />
      <FormInput
        examplefor="exampleInputPhoneNumber"
        formLabel="form-label"
        label="Phone Number"
        type="tel"
        formControl="form-control"
        inputId="exampleInputPhoneNumber"
      />
      <TextArea
        examplefor="exampleFormControlTextarea1"
        formLabel="form-label"
        label="Message"
        formControl="form-control"
        inputId="exampleFormControlTextarea1"
        row="6"
      />
      <Button text="Submit" backgroundColor="#4C054E" width="170px" />
    </form>
  );
};

export default Form;
