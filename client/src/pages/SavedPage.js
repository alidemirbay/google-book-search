import React, { useState, useEffect } from "react";
import API from "../utils/API";
import SavedResult from "../components/SavedResult"

const SavedPage = () => {

  const [savedBooks, setSavedBooks] = useState([]);

  useEffect(() => {
    API.getBooks()
      .then(res => setSavedBooks(res.data))
      .catch(err => console.log(err))
  }, [savedBooks]);

  const handleDeleteButton = id => {
    API.deleteBook(id)
      .then(setSavedBooks(savedBooks))
      .catch(err => console.log(err))
  }


  return (
    <SavedResult savedBooks={savedBooks} handleDeleteButton={handleDeleteButton} />
  )

}

export default SavedPage
