import React from "react";

const SearchResult = (props) => {
  return (
    <div className="container">
      <h3>Search Results</h3>
      {props.books.map((book) => {
        return (
          <div className="card mb-3">
            <div className="card-body">



              <div className="row">
                <div className='col-8'>
                  <h4 className="">{book.title}</h4>
                  <h5 className="">{book.authors}</h5>
                </div>


                <div className='col-4  justify-content-end'>
                  <a href={book.link} target="_blank" rel="noreferrer"> <button className="btn-primary btn m-2"> VIEW</button> </a>
                  <button className=" btn btn-success m-2" id={book.id} onClick={(event) => props.handleSavedButton(event)} > SAVE </button>
                </div>
              </div>


              <div className=" row " key={book._id}>
                <div className="col-2">
                  <img src={book.image} alt={book.title} />
                </div>
                <div className="col-10 pl-2">
                  <p className=" pr-3">{book.description}</p>
                </div>
              </div>


            </div>
          </div>
        );
      })}
    </div>
  );
};
export default SearchResult;
