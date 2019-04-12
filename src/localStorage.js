export const loadState = () => {
    try {

        // Get user from local storage
        const user = JSON.parse(localStorage.getItem('user'));

        // If user does not exist in local storage
        // Return undefined
        if (user === null && user.currentUser !== '') {
            return undefined;
        }

        // If user does exist, set username
        return ({
            username: user.currentUser,
            currentUser: null,
            messages: [],
            rooms: [
                {name: 'announcements', id: '19390485'}, 
                {name: 'general', id: '19390335'},
                {name: 'feedback', id: '19390487'},
            ],
            currentRoom: {name: 'general', id: '19390335'},
            onlineUsers: [],
        });
    }
    catch (err) {
        console.log(err);
        return undefined;
    }
}

export const saveState = (user) => {
    try {
        const state = JSON.stringify(user);
        localStorage.setItem('user', state);
    }
    catch (err) {
        console.log(err);
    }
}