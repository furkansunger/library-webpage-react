import React from 'react'
import { Link, useHistory } from 'react-router-dom'

const Book = ({ title, image, id }) => {
    const history = useHistory();
    return (
        <div className="card my-3">
            <img src={image} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title mb-4">{title}</h5>
                <Link to={`/bookdetail/${id}`} onClick={() => history.push(id)} className="btn btn-primary">Detail</Link>
            </div>
        </div>
    )
}

export default Book
