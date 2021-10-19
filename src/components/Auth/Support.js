import React from "react";
import { Link } from "react-router-dom";
import { Button, Form, FormGroup } from "react-bootstrap";
import { Icon } from "@iconify/react";
import { SP } from "../../styles";

export default function Support() {
  return (
    <div>
      <SP>
        <div className="d-flex flex-row ">
          <Link
            className="text-decoration-none text-dark"
            to="/"
          >
            <Icon icon="dashicons:arrow-left-alt2" width="38" height="38" />{" "}
            back{" "}
          </Link>
          <h3>Support</h3>
        </div>
        <hr />
        <Form className="d-flex flex-column mx-5 mb-5">
          <FormGroup className="mb-3">
            <Form.Label for="name"> Name </Form.Label>
            <Form.Control type="text" />
          </FormGroup>
          <FormGroup className="mb-3">
            <Form.Label for="email"> Email </Form.Label>
            <Form.Control type="text" />
          </FormGroup>
          <FormGroup className="mb-3">
            <Form.Label for="message"> Question </Form.Label>
            <Form.Control as="textarea" rows={5}></Form.Control>
          </FormGroup>
          <Button className=" p-2 text-center mx-auto" type="submit">
            Send
          </Button>
        </Form>
      </SP>
    </div>
  );
}
