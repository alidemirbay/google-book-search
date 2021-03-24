
import React, { useState } from "react";
import API from "../utils/API";
import SearchForm from "../components/SearchForm";
import SearchResult from "../components/SearchResult"


const SearchPage = () => {

  const [search, setSearch] = useState('');
  const [books, setBooks] = useState([]);
  const [error, setError] = useState('');



  const handleInputChange = event => {
    setSearch(event.target.value);
  }

  const handleFormSubmit = event => {
    event.preventDefault();
    API.getGoogleSearchBooks(search)
      .then(res => {
        if (res.data.items === "error") {
          throw new Error(res.data.items);
        }
        else {
          let results = res.data.items
          results = results.map(result => {
            result = {
              key: result.id,
              id: result.id,
              title: result.volumeInfo.title,
              authors: result.volumeInfo.authors,
              description: result.volumeInfo.description,
              image: result.volumeInfo.imageLinks.thumbnail,
              link: result.volumeInfo.infoLink
            }
            return result;
          })
          setBooks(results);
          setSearch("");
        }
      })
      .catch(err => setError(err.items));
  }


  const handleSavedButton = event => {
    event.preventDefault();
    let savedBooks = books.filter(book => book.id === event.target.id)
    API.saveBook(savedBooks)
      .then(console.log(savedBooks))
      .catch(err => console.log(err));
  };

  return (
    <div className='container fluid'>
      <div className='container'>
        <div className='row'>
          <div className='col-12'>
            <SearchForm
              handleFormSubmit={handleFormSubmit}
              handleInputChange={handleInputChange}
            />
          </div>
        </div>
      </div>
      <div className='container' >
        <SearchResult books={books} handleSavedButton={handleSavedButton} />
      </div>
    </div>
  )

}
export default SearchPage;