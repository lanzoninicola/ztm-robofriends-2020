import {
    CHANGE_SEARCH_FIELD,
    FETCH_ROBOTS_PENDING,
    FETCH_ROBOTS_READY,
    FETCH_ROBOTS_FAILED
} from './constants'

export const setSearchField = (text) => {
    return {
        type: CHANGE_SEARCH_FIELD,
        payload: text
    }
}


export const fetchRobots = () => async (dispatch) => {

    dispatch({ type: FETCH_ROBOTS_PENDING })

    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
        const data = await response.json();
        dispatch({ type: FETCH_ROBOTS_READY, payload: data })

    } catch (error) {
        dispatch({ type: FETCH_ROBOTS_FAILED, payload: error })
    }
}