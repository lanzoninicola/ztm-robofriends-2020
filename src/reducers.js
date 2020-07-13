import {
    CHANGE_SEARCH_FIELD,
    FETCH_ROBOTS_PENDING,
    FETCH_ROBOTS_READY,
    FETCH_ROBOTS_FAILED
} from './constants'

const initialState = {
    searchValue: ''
}


export const setSearchField = (state = initialState, action = {}) => {
    // console.log('reducers - setSearchField - ', action)
    switch (action.type) {
        case CHANGE_SEARCH_FIELD:
            return { ...state, searchValue: action.payload };
        default:
            return { ...state };
    }
}


const initialStateFetchRobots = {
    robots: []
}


export const robotsState = (state = initialStateFetchRobots, action = {}) => {
    switch (action.type) {
        case FETCH_ROBOTS_PENDING:
            return { ...state, isPending: true };
        case FETCH_ROBOTS_READY:
            return { ...state, isPending: false, robots: action.payload };
        case FETCH_ROBOTS_FAILED:
            return { ...state, isPending: false, error: action.payload };
        default:
            return { ...state };
    }

}