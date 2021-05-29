import React, { useContext, useEffect, useState } from 'react'
import { useRouteMatch } from 'react-router';
import MainContext from '../MainContext';
import Book from './Book';

const AuthorDetail = () => {
    const getData = {
        author: "",
        photo: "",
        biyo: ""
    }

    const match = useRouteMatch();
    const {id} = match.params;

    const {authors, books} = useContext(MainContext);
    
    const [aDetail, setADetail] = useState(getData);
    const [getBooks, setGetBooks] = useState([]);

    useEffect(() => {
        const findAuthor = authors.find(item => item.id === Number(id))
        
        const getAuthor = findAuthor.author;
        const getBook = books.filter(item => item.author === getAuthor);

        setGetBooks(getBook);
        setADetail(findAuthor);
    }, [])

    const {author, photo, biyo} = aDetail;

    return (
        <div className="container">
            <div className="row p-4">
                <div className="col-md-4">
                    <img src={photo} alt="..." id="detail-img"/>
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h3 className="card-title">{author}</h3>
                        <p className="card-text">{biyo}</p>
                    </div>
                </div>
            </div>
            <hr />
            <h3 className="d-block">Author's Books</h3>
            <div className="container d-flex flex-wrap justify-content-between">    
                {
                    getBooks.map(item => (
                        <Book 
                            title={item.title}
                            image={item.image}
                            key={item.id}
                            id={item.id}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default AuthorDetail
