import React from "react";
// import { Container, Row, Col } from "react-bootstrap";

const SavedResult = (props) => {
  return (
    <div className="container">
      <h3>Saved Books</h3>
      {props.savedBooks.map((savedbook) => {
        return (
          <div>
            <div className="card  mb-2">
              <div className="card-body">
                <div className="row">
                  <button
                    className=" btn btn-danger m-2"
                    id={savedbook._id}
                    onClick={() => props.handleDeleteButton(savedbook._id)}
                  >
                    Delete Book
                  </button>
                  <a href={savedbook.link} target="_blank" rel="noreferrer">
                    {" "}
                    <button className=" btn btn-success m-2">
                      {" "}
                      View Book
                    </button>{" "}
                  </a>
                </div>

                <div
                  className="row"
                  id={savedbook.title + "Card"}
                  key={savedbook._id}
                >
                  <div className="col-2">
                    <img src={savedbook.image} alt={savedbook.title} />
                  </div>
                  <div className="col-10 pl-2">
                    <h3 className="">{savedbook.title}</h3>
                    <h4 className="">{savedbook.authors}</h4>
                    <p className="pr-3">{savedbook.description}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SavedResult;
