export function sendMessage (currentUser, text, roomId) {
    try {
        currentUser.sendSimpleMessage({
            roomId: roomId,
            text: text,
        });
    }
    catch (err) {
        console.log(err);
    }
}

export async function deleteMessage (messageId) {
    try {
        const status = await fetch('api/message/delete', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({messageId}),
        });

        return status;
    }
    catch (err) {
        console.log(err);
    }
}