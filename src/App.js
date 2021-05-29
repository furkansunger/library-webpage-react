import React, { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { books as BooksData, authors as AuthorsData, category as CategoryData } from "./api/db.json";
import MainContext from "./MainContext";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import MainPage from "./components/MainPage";
import AllBooks from "./components/AllBooks";
import AllAuthors from "./components/AllAuthors";
import BookDetail from "./components/BookDetail";
import AuthorDetail from "./components/AuthorDetail";

function App() {
  const booksArray = [];
  const authorsArray = [];
  const categoryArray = [];

  Object.keys(BooksData).map((key) => {
    booksArray.push(BooksData[key]);
  })
  
  Object.keys(AuthorsData).map((key) => {
    authorsArray.push(AuthorsData[key]);
  })

  Object.keys(CategoryData).map((key) => {
    categoryArray.push(CategoryData[key]);
  })

  const [books, setBooks] = useState(booksArray);
  const [authors, setAuthors] = useState(authorsArray);
  const [category, setCategory] = useState(categoryArray);

  const data = {
    books,
    authors,
    category
  }

  const filterBooks = (categ) => {
    if (categ === "tümü") {
      setBooks(booksArray);
      return;
    }

    const filterData = booksArray.filter(item => item.category.toLowerCase() === categ)
    setBooks(filterData);
  }
  
  return (
    <>
      <MainContext.Provider value={data}>
        
        <Router>
          <Navbar/>
          <Switch>
            <Route exact path="/" component={MainPage} />
            <Route exact path="/books">
              <AllBooks filterBooks={filterBooks} />
            </Route>
            <Route exact path="/authors">
              <AllAuthors/>
            </Route>
            <Route exact path="/bookdetail/:id">
              <BookDetail/>
            </Route>
            <Route exact path="/authordetail/:id">
              <AuthorDetail/>
            </Route>
          </Switch>
          <Footer/>
        </Router>
        
      </MainContext.Provider>
    </>
  );
}

export default App;
