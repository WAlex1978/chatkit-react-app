import { ChatManager, TokenProvider } from '@pusher/chatkit-client'

export async function login (username, updatePresence) {
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

        const currentUser = await chatManager.connect({

            // Subscribe to user presence
            // Updates when a user signs on or off
            onPresenceChanged: (state, user) => {
                if (state.current === 'online' || state.previous === 'online')
                updatePresence(state, user);
            }
        });
        return currentUser;
    }
    catch (err) {
        console.log(err);
        return null;
    }
}