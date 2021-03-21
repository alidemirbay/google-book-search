import React from "react";

const SearchForm = (props) => {
  return (
    <form>
      <div className="form-group">
        <label className="BookSearchLabel">
          <h3>Search For Books</h3>
        </label>
        <br></br>
        <input
          className="col-12 form-control"
          value={props.search}
          type="text"
          name="searchBook"
          placeholder="Search for a book by Title"
          onChange={props.handleInputChange}
        />
      </div>
      <button
        type="submit"
        className=" btn btn-primary mb-3"
        onClick={props.handleFormSubmit}
      >
        SEARCH
      </button>
    </form>
  );
};

export default SearchForm;
