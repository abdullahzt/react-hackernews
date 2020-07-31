import React, { Component } from 'react';
import { connect } from 'react-redux';
import NewsItem from '../NewsItem/NewsItem';

import { fetchNews } from '../../store/actions/news';

class NewsList extends Component {

    componentDidMount() {
        this.props.fetchNews();
    }

    render() {

        const news = this.props.news.map(n => (
            <NewsItem news={n} />
        ))

        if (news.length === 0) {
            let arr = []
            for(let i = 0; i < 6; i++) {
                arr.push((<NewsItem showSkeleton />))
            }

            return (
                <div>
                    {arr}
                </div>
            )
        } else {
            
            return (
                <div>
                    {news}    
                </div>
            )

        }

    }

}

function mapStateToProps(state) {
    return {
        news: state.news
    }
}

export default connect(mapStateToProps, { fetchNews })(NewsList);