import React, { useState } from "react";
import jsonp from "jsonp";
import toQueryString from "to-querystring";
import Input from "antd/es/input";
import Button from "antd/es/button";
import displayMessage from "antd/es/message";
import {
  BracketContainer,
  BracketLeft,
  BracketRight,
  Container,
  FormContainer,
} from "./styles";

const urlBase = "//gmail.us2.list-manage.com/subscribe/post?u=cc89c4d33a911046ebe0831ac&amp;id=173c9d191c";

export default () => {
  const initialState = {
    email: undefined,
    message: undefined,
    status: undefined,
    isValid: false,
  };
  const [state, setState] = useState(initialState);

  const {
    email,
    status,
    isValid,
  } = state;

  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const validateForm = () => emailRegex.test(email);
  const params = toQueryString({ EMAIL: email });
  const url = `${urlBase.replace("/post?", "/post-json?")}&${params}`;

  const subscribe = () => jsonp(
    url,
    { param: "c" },
    (err, data) => {
      if (err) {
        setState({
          ...state,
          status: "error",
          message: err,
        });
        console.error(err);
        displayMessage.error("There was an error with your submission. Please try again later.");
      } else if (data.result !== "success") {
        setState({
          ...state,
          status: "error",
          message: data.msg,
        });
        console.error(data.msg);
        displayMessage.error("There was an error with your submission. Please try again later.");
      } else {
        setState({
          ...state,
          status: "success",
          message: data.msg,
        });
        displayMessage.success("Thanks for subscribing!");
        setTimeout(() => {
          setState(initialState);
        }, 3000);
      }
    },
  );

  return (
    <Container>
      <BracketContainer>
        <BracketLeft />
        <BracketRight />
      </BracketContainer>
      <FormContainer>
        <Input
          type="email"
          placeholder="Enter your email to get the latest updates"
          value={email}
          onChange={(e) => setState({
            ...state,
            email: e.target.value,
            isValid: validateForm(),
          })}
        />
        <Button
          type="primary"
          disabled={!isValid}
          onClick={() => {
            setState({
              ...state,
              status: "sending",
            });
            subscribe({ EMAIL: email });
          }}
          loading={status === "sending"}
        >
          {status === "sending" ? "Submitting" : "Subscribe to the Mailing List"}
        </Button>
      </FormContainer>
    </Container>
  );
};
