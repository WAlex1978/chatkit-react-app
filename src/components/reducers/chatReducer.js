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
                    messageId: action.message.id,
                    senderId: action.message.senderId,
                    body: action.message.parts[0].payload.content,
                    date: action.message.createdAt,
                }]
            }

        case 'DELETE_MESSAGE':
            return {
                ...state,
                messages: state.messages.filter(message => {
                    return message.messageId !== action.messageId;
                })
            }

        case 'LOG_OUT':
            return {
                username: null,
                currentUser: null,
                messages: [],
            }

        default:
            return state;
    }
}

export default chatReducer;