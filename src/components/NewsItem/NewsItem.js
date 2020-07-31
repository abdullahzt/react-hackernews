import React from 'react';
import './NewsItem.css'
import Skeleton from 'react-loading-skeleton';

const NewsItem = ({ news, showSkeleton }) => {

    return (
        <div className="item" >
            {news && (
                <div className="container" >
                    <h1>{news.title} <span className="author">~ {news.author}</span></h1>
                    <div className="details">
                     <h3>{news.points} points</h3>
                    </div>
                </div>
            )}

            { showSkeleton && (
                <div>
                    <Skeleton className="skeleton" count={3} />
                </div>
            ) }
        </div>
    )

}

export default NewsItem;