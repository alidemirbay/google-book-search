import React, { Component } from "react";
import API from "../utils/API";
import SearchForm from "../components/SearchForm";
import SearchResult from "../components/SearchResult";

class SearchPage extends Component {
  state = {
    search: "",
    books: [],
    error: "",
  };

  handleInputChange = (event) => {
    this.setState({ search: event.target.value });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    API.getGoogleSearchBooks(this.state.search)
      .then((res) => {
        if (res.data.items === "error") {
          throw new Error(res.data.items);
        } else {
          let results = res.data.items;
          results = results.map((result) => {
            result = {
              key: result.id,
              id: result.id,
              title: result.volumeInfo.title,
              authors: result.volumeInfo.authors,
              description: result.volumeInfo.description,
              image: result.volumeInfo.imageLinks.thumbnail,
              link: result.volumeInfo.infoLink,
            };
            return result;
          });
          this.setState({ books: results, search: "" });
        }
      })
      .catch((err) => this.setState({ error: err.items }));
  };

  handleSavedButton = (event) => {
    event.preventDefault();
    let savedBooks = this.state.books.filter(
      (book) => book.id === event.target.id
    );
    API.saveBook(savedBooks)
      .then(console.log(savedBooks))
      .catch((err) => console.log(err));
  };
  render() {
    return (
      <div className="container fluid">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <SearchForm
                handleFormSubmit={this.handleFormSubmit}
                handleInputChange={this.handleInputChange}
              />
            </div>
          </div>
        </div>
        <div className="container">
          <SearchResult
            books={this.state.books}
            handleSavedButton={this.handleSavedButton}
          />
        </div>
      </div>
    );
  }
}
export default SearchPage;
