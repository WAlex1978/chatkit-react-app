export function subscribe(currentUser, rooms, fetchMessages) {
    try{
        // Subscribe to all three rooms
        rooms.forEach((room, i) => {
            currentUser.subscribeToRoomMultipart({
                roomId: room.id,
                hooks: {
                    onMessage: message => {
                        if (message.parts[0].payload.content !== 'DELETED') {
                            fetchMessages(message);
                        }
                    }
                },
                messageLimit: 100,
            });
        })
    }
    catch(err) {
        console.log(err);
    }
}