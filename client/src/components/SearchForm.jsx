import React from "react";
import { Card, Form, Button } from "react-bootstrap";

function SearchForm({}) {
  return (
    <Card>
      <Card.Body>
        <Form>
          <Form.Group>
            <Form.Label>Book Name</Form.Label>
            <Form.Control
              type="text"
              // value={props.search}
              name="searchBook"
              placeholder="Enter book name"
              // onChange={props.handleInputChange}
            />
          </Form.Group>

          <Button
            variant="primary"
            type="submit"
            // onClick={props.handleFormSubmit}
          >
            {" "}
            Search{" "}
          </Button>
        </Form>
      </Card.Body>
    </Card>
  );
}

export default SearchForm;
