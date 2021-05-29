import React, { useContext } from 'react'
import MainContext from '../MainContext';
import Author from './Author'

const Authors = () => {
    const { authors } = useContext(MainContext);
    let lastAuthors = authors.slice(0, 3);
    
    return (
        <div className="container text-center p-5 books">
            <h2>POPULAR AUTHORS</h2>
            <hr />
            <div className="container d-flex flex-wrap justify-content-between">
                {
                    lastAuthors.map(author => (
                        <Author
                            name={author.author}
                            photo={author.photo}
                            key={author.id}
                            id={author.id}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default Authors
