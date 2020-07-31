import React from 'react';
import './NewsItem.css'
import Skeleton from 'react-loading-skeleton';

const NewsItem = ({ title, showSkeleton }) => {

    return (
        <div className="item" >
            <h1>{title}</h1>
            { showSkeleton && (
                <div>
                    <Skeleton className="skeleton" count={3} />
                </div>
            ) }
        </div>
    )

}

export default NewsItem;