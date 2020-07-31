import React from 'react';
import './NewsItem.css'

const NewsItem = ({ title }) => {

    return (
        <div className="item" >
            <h1>{title}</h1>
        </div>
    )

}

export default NewsItem;