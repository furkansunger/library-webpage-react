import React, { useContext } from 'react'
import MainContext from '../MainContext'
import Author from './Author';

const AllAuthors = () => {
    const {authors} = useContext(MainContext);

    return (
        <div className="container p-5 text-center">
            <h1 className="mb-4">AUTHORS</h1>
            <div className="row row-cols-md-3 g-4">
                {
                    
                    authors.map(author => (
                        <div className="col">
                            <Author
                                key={author.id}
                                name={author.author}
                                photo={author.photo}
                                id={author.id}
                            />
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default AllAuthors
