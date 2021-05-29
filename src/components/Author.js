import React from 'react'
import { Link, useHistory } from 'react-router-dom'

const Author = ({name, photo, id}) => {
    const history = useHistory();
    return (
        <div className="card my-3">
            <img src={photo} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title mb-4">{name}</h5>
                <Link to={`authordetail/${id}`} onClick={() => history.push(id)} className="btn btn-primary">Detail</Link>
            </div>
        </div>
    )
}

export default Author
