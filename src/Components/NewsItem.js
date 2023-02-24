import React from 'react'

const NewsItem = (props) => {

    let { title, description, imageUrl, newsUrl, author, date, source } = props
    return (
        <div className='mx-3'>
            <div className="card" style={{ width: "18rem" }}>
                <img src={imageUrl} alt="..."/>
                <div className="card-body" style={{ backgroundColor: '#e3e3e369' }}>
                    <h5 className="card-title mb-0">{title}</h5>
                    <span className=" badge rounded-pill bg-danger">{source}</span>
                    <p className="card-text">{description}</p>
                    <p className="card-text"><small className="text-danger">By {author} on {new Date(date).toGMTString()}</small></p>
                    <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-primary btn btn-sm">Visit News</a>
                </div>
            </div>
        </div>
    )

}

export default NewsItem
