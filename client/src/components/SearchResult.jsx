import React from "react";

const SearchResult = (props) => {
  return (
    <div className="container">
      <h3>Search Results</h3>
      {props.books.map((book) => {
        return (
          <div className="card mb-3">
            <div className="card-body">
              <div className=" row " key={book._id}>
                <div className="col-2">
                  <img src={book.image} alt={book.title} />
                </div>
                <div className="col-10 pl-2">
                  <h3 className="">{book.title}</h3>
                  <h4 className="">{book.authors}</h4>
                  <p className=" pr-3">{book.description}</p>
                </div>
              </div>
              <div className="row">
                <button
                  className=" btn btn-success m-2"
                  id={book.id}
                  onClick={(event) => props.handleSavedButton(event)}
                >
                  SAVE
                </button>
                <a href={book.link} target="_blank" rel="noreferrer">
                  <button className="btn-primary btn m-2"> VIEW</button>
                </a>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
export default SearchResult;
