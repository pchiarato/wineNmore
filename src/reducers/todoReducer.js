const initialState = [{title: 0, value:'Go Shopping'}, {title: 1, value:'Take out the Trash'}]

const list = (list = initialState, action) => {
    if(action.type === 'ADD_ITEM') {
        return [...list, action.payload];
    }
    if(action.type === 'REMOVE_ITEM') {
        const newList = [...list];
        newList.splice(action.payload, 1);
        return newList;
    } else {
        return list;
    }
}

export default list;
