import { FETCH_NEWS } from '../actionType';

function news(state = [], action) {
    switch (action.type) {
        case FETCH_NEWS:
            return [...action.news]
        default:
            return state
    }
}

export default news;