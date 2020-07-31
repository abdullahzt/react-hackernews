import { FETCH_NEWS } from '../actionType';

export function loadNews(news) {
    return {
        type: FETCH_NEWS,
        news
    }
}

export function fetchNews() {
    return dispatch => {
        return fetch("https://hn.algolia.com/api/v1/search?tags=front_page")
            .then(res => handleResponse(res))
            .then(res => dispatch(loadNews(res.hits)))
    }
}

function handleResponse(resp) {
    if (!resp.ok) {
        if (resp.status >= 400 && resp.status < 500) {
            return resp.json().then(data => {
                let err = { errorMessage: data.message };
                throw err;
            })
        } else {
            let err = { errorMessage: "Please try again later. Servor is not responding" };
            throw err;
        }
    }
    return resp.json()
}