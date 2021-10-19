import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

export default function UpdateEmail() {
    const emailRef = useRef();
    const { currentUser, updateEmail } = useAuth();
    const [error, setError] = useState("");   
    const [loading, setLoading] = useState(false);
    const history = useHistory();

    function handleSubmit(e) {
        e.preventDefault()

        const promises = []
        setLoading(true)
        setError("")
        if (emailRef.current.value !== currentUser.email) {
            promises.push(updateEmail(emailRef.current.value))
        }

        Promise.all(promises).then(() => {
            history.push("/")
        })
        .catch(() => {
            setError("Error updating profile")
        }).finally(() => {
            setLoading(false)
        })
    } 
  return (
    <div>
      <Card>
        <Card.Body>
          <h2 className="text-center mb-4">Update Email</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group id="email">
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                ref={emailRef}
                required defaultValue={currentUser.email}
              />
            </Form.Group>
            <Button className="w-100 text-center mt-2" type="submit" disabled={loading}>
              Update Email
            </Button>
          </Form>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        <Link to="/">Cancel</Link>
      </div>
    </div>
  );
}

