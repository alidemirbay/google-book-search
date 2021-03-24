import React from "react";

const SearchForm = (props) => {
  return (
    <form className="border">
      <div className="form-group ">
        <label className="BookSearchLabel m-2">
          <h3>Search For Books</h3>
        </label>

        <input
          className="col-12 form-control "
          value={props.search}
          type="text"
          name="searchBook"
          placeholder="Type Book Title or Author..."
          onChange={props.handleInputChange}
        />
      </div>
      <button
        type="submit"
        className=" btn btn-primary m-2"
        onClick={props.handleFormSubmit}
      >
        SEARCH
      </button>
    </form>
  );
};

export default SearchForm;
