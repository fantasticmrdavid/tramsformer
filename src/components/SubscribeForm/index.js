import React, { useState } from "react";
import Input from "antd/es/input";
import Button from "antd/es/button";
import MailchimpSubscribe from "react-mailchimp-subscribe";
// import jsonp from "jsonp";
// import queryString from "query-string";
import { Container, FormContainer } from "./styles";

const url = "//gmail.us2.list-manage.com/subscribe/post?u=cc89c4d33a911046ebe0831ac&amp;id=173c9d191c";

export default () => {
  const [state, setState] = useState({
    email: undefined,
    isSubmitted: false,
    isValid: false,
  });

  const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const validateForm = () => emailRegex.test(state.email);

  return (
    <MailchimpSubscribe
      url={url}
      render={({
        subscribe,
        status,
        message,
      }) => (
        <Container>
          {status === "sending" && <div style={{ color: "blue" }}>sending...</div>}
          {status === "error" && <div style={{ color: "red" }}>{message}</div>}
          {status === "success" && <div style={{ color: "green" }}>Subscribed !</div>}
          <FormContainer>
            <Input
              type="email"
              placeholder="Email"
              onChange={(e) => setState({
                ...state,
                email: e.target.value,
                isValid: validateForm(),
              })}
            />
            <Button
              type="primary"
              disabled={!state.isValid}
              onClick={() => subscribe({
                EMAIL: state.email,
              })}
            >
              Subscribe
            </Button>
          </FormContainer>
        </Container>
      )}
    />
  );
};
