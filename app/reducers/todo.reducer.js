const todo = function (state = [], action) {
    switch( action.type) {
        case 'ADD_TODO':
            state = [...state, action.payload];
            break;
    }
    return state;
}

export default todo;
