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
                    messageId: action.message.messageId,
                    senderId: action.message.senderId,
                    body: action.message.body,
                    date: action.message.date,
                }]
            }

        case 'DELETE_MESSAGE':
            return {
                ...state,
                messages: state.messages.filter(message => {
                    return message.messageId !== action.messageId;
                })
            }

        default:
            return state;
    }
}

export default chatReducer;