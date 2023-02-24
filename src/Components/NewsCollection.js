import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'

const NewsCollection = (props) => {

    const [articles, setArticles] = useState([])
    const [page, setPage] = useState(1)
    const [loading, setLoading] = useState(false)
    const [totalResults, setTotalResults] = useState(0)

    const updateNews = async () => {
        try {
            props.setProgress(20)
            let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=4aebd984746a41eb90494715bd7e9f42&page=${page}&pageSize=${props.pageSize}`;
            setLoading(true)
            let data = await fetch(url);
            props.setProgress(30)
            let parsedData = await data.json();
            props.setProgress(70)
            setArticles(parsedData.articles)
            setTotalResults(parsedData.totalResults)
            setLoading(false)
            props.setProgress(100)
        }
        catch (error) {
            console.log("Some Error Occured")
        }
    }

    useEffect(() => {
        updateNews();
        // eslint-disable-next-line 
    }, [])

    const getNext = async () => {
        setPage(page + 1)
        updateNews();
    }

    const getPrevious = async () => {
        setPage(page - 1)
        updateNews();
    }

    return (
        <div className='container my-3'>
            <h2 style={{ margin: '0px 0px 0px 101px' }}>Get<span className='text-danger'>News</span>-Top <span className='text-danger'>{(props.category).slice(0, 1).toUpperCase() + (props.category).slice(1, props.category.length)} Headlines</span></h2>

            <div className="row mt-1 h-100 d-flex justify-content-center">

                {loading && <Spinner />}
                {articles.map((element) => {
                    return <div className="col-md-4 h-100 mt-3 d-flex" style={{ width: '28.33%' }} key={element.url}>
                        <NewsItem title={element.title} description={element.description ? element.description.slice(0, 88) : ""} imageUrl={element.urlToImage ? element.urlToImage : "https://media.istockphoto.com/id/1357365823/vector/default-image-icon-vector-missing-picture-page-for-website-design-or-mobile-app-no-photo.jpg?s=612x612&w=0&k=20&c=PM_optEhHBTZkuJQLlCjLz-v3zzxp-1mpNQZsdjrbns="} newsUrl={element.url} author={element.author ? element.author : "Unknown"} date={element.publishedAt} source={element.source.name} />
                    </div>

                })}
            </div>

            {!loading && <div className="container d-flex justify-content-between mt-4">
                <button disabled={page <= 1} type="button" className="btn btn-dark" onClick={getPrevious}>Previous</button>
                <button disabled={page + 1 > Math.ceil(totalResults / props.pageSize)} type="button" className="btn btn-dark" onClick={getNext}>Next</button>
            </div>

            }
        </div>
    )
}

NewsCollection.defaultProps = {
    country: 'in',
    category: 'general',
    pageSize: 5,
}

NewsCollection.propTypes = {
    country: PropTypes.string,
    category: PropTypes.string,
    pageSize: PropTypes.number,
}


export default NewsCollection
