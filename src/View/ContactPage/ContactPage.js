import React from "react";
import { Form, FormGroup, Label, Input, FormText, Button } from "reactstrap";
import UnderlineHeading from "../UnderlineHeading/UnderlineHeading";
import "./ContactPage.scss";

const ContactPage = (props) => {
  return (
    <div className="col-11 mx-auto ContactPage">
      <UnderlineHeading Title="Contact Us" />
      <div className="col-7 mx-auto Form">
        <Form style={{ marginTop: "2rem" }}>
          <FormGroup className="col-8 mx-auto ">
            <Input
              type="email"
              name="email"
              id="exampleEmail"
              placeholder="Enter Your email"
            />
          </FormGroup>
          <FormGroup className="col-8 mx-auto">
            <Input
              type="password"
              name="password"
              id="examplePassword"
              placeholder="Enter Your Password"
            />
          </FormGroup>

          <FormGroup className="col-8 mx-auto">
            <Input
              style={{ height: "6rem" }}
              type="textarea"
              name="text"
              id="exampleText"
              placeholder="Write a message."
            />
          </FormGroup>
          <FormGroup className="col-8 mx-auto">
            <Label for="exampleFile">File</Label>
            <Input type="file" name="file" id="exampleFile" />
            <FormText color="muted">
              If you have any Magazine design you upload here, it can be
              published on own our website.
            </FormText>
          </FormGroup>
        </Form>
        <Button className="hvr-sweep-to-right Send">Send</Button>
      </div>
    </div>
  );
};

export default ContactPage;
