const messageRouter = require('express').Router();
const Chatkit = require('@pusher/chatkit-server');

const chatkit = new Chatkit.default({
    instanceLocator: 'v1:us1:84bda248-30a1-4e3d-a309-b861f80ca47e',
    key: '23a86e19-dd12-4e68-86be-8de74b244ee7:fWn8LWlyxwvx1DUT+4Duza9rDmSpBfq5IKXT05fMikY=',
})

messageRouter.post('/send', async (req, res) => {
    try {
        const user_id = req.body.user_id;
        const room_id = req.body.room_id;
        const text = req.body.text;

        const data = await chatkit.sendSimpleMessage({
            userId: user_id,
            roomId: room_id,
            text: text,
        });

        res.send(data);
    }
    catch (err) {
        console.log(err);
    }
})

messageRouter.post('/delete', async (req, res) => {
    try {
        const id = req.body.messageId;

        await chatkit.deleteMessage({id: id});
        res.status(200).send('DELETED');
    }
    catch (err) {
        console.log(err);
    }
})

module.exports = messageRouter;