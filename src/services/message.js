export function sendMessage (currentUser, text) {
    try {
        currentUser.sendSimpleMessage({
            roomId: '19390335',
            text: text,
        });
    }
    catch (err) {
        console.log(err);
    }
}

export async function deleteMessage (messageId) {
    try {
        const status = await fetch('http://localhost:5000/message/delete', {
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