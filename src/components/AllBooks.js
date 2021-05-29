/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext } from 'react'
import MainContext from '../MainContext'
import Book from './Book'

const AllBooks = ({ filterBooks }) => {
    const { books, category } = useContext(MainContext);

    const categorizeBooks = (e) => {
        e.preventDefault();
        filterBooks(e.target.textContent.toLowerCase());
    }

    return (
        <div className="container p-5 text-center">
            <h1 className="mb-4">BOOKS</h1>
            <div className="btn-group flex-wrap" role="group">
                <button type="button" className="btn btn-outline-primary" onClick={categorizeBooks}>Tümü</button>
                {
                    category.map(item => (
                        <button type="button" className="btn btn-outline-primary" onClick={categorizeBooks}>{item.category}</button>
                    ))
                }
            </div>

            <div className="row row-cols-md-3 g-4 mt-4">
                {
                    
                    books.map(book => (
                        <div className="col">
                            <Book
                                key={book.id}
                                title={book.title}
                                image={book.image}
                                id={book.id}
                            />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default AllBooks
