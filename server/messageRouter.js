const messageRouter = require('express').Router();
const chatkit = require('./chatkit');

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