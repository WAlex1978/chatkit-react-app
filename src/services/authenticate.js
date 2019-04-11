import { ChatManager, TokenProvider } from '@pusher/chatkit-client'

export async function login (username) {
    try {
        await fetch('api/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({username})
        });

        const chatManager = new ChatManager({
            instanceLocator: 'v1:us1:84bda248-30a1-4e3d-a309-b861f80ca47e',
            userId: username,
            tokenProvider: new TokenProvider({url: 'api/auth/'})
        });

        const currentUser = await chatManager.connect();
        return currentUser;
    }
    catch (err) {
        console.log(err);
        return null;
    }
}