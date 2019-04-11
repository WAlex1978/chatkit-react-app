const initState = {
    username: null,
    currentUser: null,
    messages: [],
}

const chatReducer = (state = initState, action) => {
    switch(action.type) {
        case 'SET_CURRENT_USER':
            return {
                ...state,
                currentUser: action.currentUser,
            }

        case 'FETCH_MESSAGES':
            return {
                ...state,
                messages: [...state.messages, {
                    senderId: action.message.senderId,
                    body: action.message.body,
                    date: action.message.date,
                }]
            }

        default:
            return state;
    }
}

export default chatReducer;