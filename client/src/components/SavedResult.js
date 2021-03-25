import React from "react";

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

                  <div className='col-8'>
                    <h4 className="">{savedbook.title}</h4>
                    <h5 className="">{savedbook.authors}</h5>
                  </div>
                  <div className='col-4  justify-content-end'>
                    <a href={savedbook.link} target="_blank" rel="noreferrer"> {" "} <button className=" btn btn-success m-2"> VIEW</button>{" "} </a>
                    <button className=" btn btn-danger m-2" id={savedbook._id} onClick={() => props.handleDeleteButton(savedbook._id)} > DELETE{" "} </button>
                  </div>

                </div>

                <div className="row" id={savedbook.title + "Card"} key={savedbook._id} >
                  <div className="col-2"> {" "} <img src={savedbook.image} alt={savedbook.title} />{" "} </div>
                  <div className="col-10 pl-2">
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
