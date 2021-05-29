import React, { useContext, useEffect, useState } from 'react'
import { useRouteMatch } from 'react-router'
import MainContext from '../MainContext'

const BookDetail = () => {
    const getData = {
        title: "",
        author: "",
        image: "",
        category: "",
        description: ""
    }
    
    const match = useRouteMatch();
    const {id} = match.params;

    const {books} = useContext(MainContext);
    
    const [bDetail, setBDetail] = useState(getData);
    

    useEffect(() => {
        const findBook = books.find(item => item.id === Number(id))
        setBDetail(findBook);
    }, [])
    

    const {title, author, category, image, description} = bDetail;

    return (
        <div className="container">
            <div className="row p-4">
                <div className="col-md-4">
                    <img src={image} alt="..." id="detail-img" />
                </div>
                <div className="col-md-8">
                    <div className="card-body">
                        <h3 className="card-title">{title} - {author}</h3>
                        <p className="fw-bold">{category}</p>
                        <p className="card-text">{description}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BookDetail
