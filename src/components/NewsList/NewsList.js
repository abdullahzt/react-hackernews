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
            <NewsItem title={n.title} />
        ))

        return (
            <div>
                {news}    
            </div>
        )
    }

}

function mapStateToProps(state) {
    return {
        news: state.news
    }
}

export default connect(mapStateToProps, { fetchNews })(NewsList);