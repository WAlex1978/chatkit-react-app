const initState = {
    username: null,
    currentUser: null,
    rooms: [
        {name: 'announcements', id: '19390485'}, 
        {name: 'general', id: '19390335'},
        {name: 'feedback', id: '19390487'},
    ],
    currentRoom: {name: 'general', id: '19390335'},
    messages: [],
    onlineUsers: [],
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
                    roomId: action.message.roomId,
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

        case 'CHANGE_ROOM':
            return {
                ...state,
                currentRoom: action.currentRoom,
            }

        case 'UPDATE_PRESENCE':

            // If user has gone offline
            // Remove user from online users
            if (action.state.current === 'offline') {
                let users = state.onlineUsers.filter(user => user !== action.user);

                return {
                    ...state,
                    onlineUsers: users
                }
            }

            // Else, add user to online users
            return {
                ...state,
                onlineUsers: [...state.onlineUsers,action.user]
            }

        default:
            return state;
    }
}

export default chatReducer;