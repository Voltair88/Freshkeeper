import React, { useRef, useState } from "react";
import { Form, Button, Card, Alert } from "react-bootstrap";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function UpdateProfile() {
    const emailRef = useRef();
    const passwordRef = useRef();
    const confirmPasswordRef = useRef();
    const { currentUser,updatePassword, updateEmail } = useAuth();
    const [error, setError] = useState("");   
    const [loading, setLoading] = useState(false);
    const history = useHistory();

    function handleSubmit(e) {
        e.preventDefault()

        if (passwordRef.current.value !== confirmPasswordRef.current.value) {
            return setError("Passwords do not match")
        }

        const promises = []
        setLoading(true)
        setError("")
        if (emailRef.current.value !== currentUser.email) {
            promises.push(updateEmail(emailRef.current.value))
        }
        if (passwordRef.current.value !== "") {
            promises.push(updatePassword(passwordRef.current.value))
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
          <h2 className="text-center mb-4">Update Profile</h2>
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
            <Form.Group id="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Leave Blank to keep the same"
                ref={passwordRef}
              />
            </Form.Group>
            <Form.Group id="confirmPassword">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                placeholder="Leave Blank to keep the same"
                ref={confirmPasswordRef}
              />
            </Form.Group>
            <Button className="w-100 text-center mt-2" type="submit" disabled={loading}>
              Update Profile
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
