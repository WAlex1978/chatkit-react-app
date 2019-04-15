export function subscribe(currentUser, rooms, fetchMessages) {
    try {
        // Subscribe to all three rooms
        rooms.forEach((room => {
            currentUser.subscribeToRoomMultipart({
                roomId: room.id,
                hooks: {
                    // On new messages
                    onMessage: message => {
                        if (message.parts[0].payload.content !== 'DELETED') {
                            fetchMessages(message);
                        }
                    },
                    // When a user is currently typing
                    onUserStartedTyping: user => {
                        console.log(user.name, 'started typing');
                    },
                    // When user has stopped typing
                    onUserStoppedTyping: user => {
                        console.log(user.name, 'stopped-typing');
                    }
                },
                messageLimit: 100,
            });
        }))
    }
    catch(err) {
        console.log(err);
    }
}