import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import { postAdminUser } from "../../helpers/axiosHelper";
import { toast } from "react-toastify";

export const RegistrationForm = () => {
  const [form, setForm] = useState({});

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    if (form.password != form.confirmPassword) {
      return alert("Password and confirm password do not match");
    }

    const { confirmPassword, ...rest } = form;
    const { status, message } = await postAdminUser(rest);
    toast[status](message);
    const result = await postAdminUser(form);
    console.log(result);
  };
  return (
    <Form onSubmit={handleOnSubmit}>
      <h3> Registration Form </h3>
      <hr />

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>First Name</Form.Label>
        <Form.Control
          onChange={handleOnChange}
          type="text"
          name="fName"
          placeholder="Enter first name"
          required
        />
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Last Name</Form.Label>
        <Form.Control
          onChange={handleOnChange}
          type="text"
          name="lName"
          placeholder="Enter last name"
          required
        />
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>DOB</Form.Label>
        <Form.Control
          onChange={handleOnChange}
          type="date"
          name="dob"
          placeholder="Enter date of birth"
        />
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>phone</Form.Label>
        <Form.Control
          onChange={handleOnChange}
          type="text"
          name="phone"
          placeholder="04444444444"
          required
        />
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Address</Form.Label>
        <Form.Control
          onChange={handleOnChange}
          type="text"
          name="address"
          placeholder="1 Sydney"
        />
        <Form.Text className="text-muted"></Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          onChange={handleOnChange}
          type="email"
          name="email"
          placeholder="Enter email"
          required
        />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          onChange={handleOnChange}
          type="password"
          name="password"
          placeholder="Password"
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control
          onChange={handleOnChange}
          type="password"
          name="confirmPassword"
          placeholder="Password"
          required
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};
