import React, { useContext } from 'react'
import MainContext from '../MainContext'
import Book from './Book'

const Books = () => {
    const { books } = useContext(MainContext);
    
    let lastBooks = books.slice(0, 3);

    return (
        <div className="container text-center p-5 books">
            <h2>POPULAR BOOKS</h2>
            <hr />
            <div className="container d-flex flex-wrap justify-content-between">
                {
                    lastBooks.map((book) => (
                        <Book 
                            title={book.title}
                            image={book.image}
                            key={book.id}
                            id={book.id}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default Books
