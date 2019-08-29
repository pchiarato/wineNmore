import jsonPlaceholder from './../apis/jsonPlaceholder';

export const addItem = (item) => {
    return {
        type: 'ADD_ITEM',
        payload: item
    }
}
export const removeItem = (index) => {
    return {
        type: 'REMOVE_ITEM',
        payload: index
    }
}

export const fetchPosts = () => async dispatch => {
        const response = await jsonPlaceholder.get('/posts');
        dispatch({type: 'FETCH_POSTS', payload: response.data.splice(0,5)});
    }
