import React, { useState } from "react";
import { Form, Button, Col } from "react-bootstrap";

const AddNum = ({ addNewNumber }) => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addNewNumber(name, number);
  };

  return (
    <div className="form">
      <Form.Row onSubmit={handleSubmit}>
        <Form.Group>
          <Col>
            <Form.Label>Name</Form.Label>
          </Col>
          <Col>
            <Form.Control
              type="text"
              placeholder="enter name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Col>
        </Form.Group>

        <Form.Group>
          <Col>
            <Form.Label>Phone Number</Form.Label>
          </Col>
          <Col>
            <Form.Control
              type="text"
              placeholder="enter number"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
            />
          </Col>
        </Form.Group>

        <Button type="submit">Add</Button>
      </Form.Row>
    </div>
  );
};

export default AddNum;
