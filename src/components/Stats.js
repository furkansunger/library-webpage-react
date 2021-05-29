import React, { useContext } from 'react'
import MainContext from '../MainContext'

const Stats = () => {
    const {books, authors, category} = useContext(MainContext);

    return (
        <div className="bg-secondary text-light text-center fs-4" id="stats">
            <div className="row">
                <div className="col p-5">
                    <i className="fas fa-book"></i><span className="mx-2"> +{books.length}</span>
                    <p className="mt-2">Books</p>
                </div>
                <div className="col p-5">
                    <i className="fas fa-user"></i><span className="mx-2"> +{authors.length}</span>
                    <p className="mt-2">Authors</p>
                </div>
                <div className="col p-5">
                    <i className="fas fa-list"></i><span className="mx-2"> +{category.length}</span>
                    <p className="mt-2">Categories</p>
                </div>
            </div>
        </div>
    )
}

export default Stats
