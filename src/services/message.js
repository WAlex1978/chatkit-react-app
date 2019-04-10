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