import axios from "axios"

const API = {
    // get book from google 
    getGoogleSearchBooks: function (query) {
        return axios.get("https://www.googleapis.com/books/v1/volumes?q=" + query)
    },

    // Gets all books
    getBooks: function () {
        return axios.get("/api/books");
    },

    // get the book
    getBook: function (id) {
        return axios.get("/api/books/" + id);
    },

    // save the book to db
    saveBook: function (savedBooks) {
        return axios.post("/api/books", savedBooks);
    },

    // delete the book
    deleteBook: function (id) {
        return axios.delete("/api/books/" + id);
    }
}
export default API;