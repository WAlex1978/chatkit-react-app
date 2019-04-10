const initState = {
    currentUser: null
}

const chatReducer = (state = initState, action) => {
    switch(action.type) {
        case 'SET_CURRENT_USER':
            return {
                ...state,
                currentUser: action.currentUser,
            }

        default:
            return state;
    }
}

export default chatReducer;