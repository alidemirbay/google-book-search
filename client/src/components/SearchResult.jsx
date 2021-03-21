import React from "react";
import { Card, Row, Container } from "react-bootstrap";
// import "./style.css";

const SearchResult = (props) => {
  return (
    <Container>
      <h3>Search Results</h3>
      {props.books.map((book) => {
        return (
          <div className="card mb-5">
            <div className="card-body">
              <Card id={book.title} key={book._id}>
                <Card.Body size="2">
                  <img src={book.image} alt={book.title} />
                </Card.Body>
                <Card.Body size="10" className="pl-2">
                  <h3 className="bookTitle">{book.title}</h3>
                  <h4 className="bookAuthor">{book.authors}</h4>
                  <p className="bookDescription pr-3">{book.description}</p>
                </Card.Body>
              </Card>
              <Row>
                <button
                  className="save btn mt-4 ml-3 mr-1"
                  id={book.id}
                  onClick={(event) => props.handleSavedButton(event)}
                >
                  Save Book
                </button>
                <a href={book.link} target="_blank" rel="noopener noreferrer">
                  <button className="view btn mt-4">View Book</button>
                </a>
              </Row>
            </div>
          </div>
        );
      })}
    </Container>
  );
};
export default SearchResult;
