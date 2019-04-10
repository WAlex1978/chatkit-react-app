const authRouter = require('express').Router();
const Chatkit = require('@pusher/chatkit-server');

const chatkit = new Chatkit.default({
    instanceLocator: 'v1:us1:84bda248-30a1-4e3d-a309-b861f80ca47e',
    key: '23a86e19-dd12-4e68-86be-8de74b244ee7:fWn8LWlyxwvx1DUT+4Duza9rDmSpBfq5IKXT05fMikY=',
})

authRouter.post('/', async (req, res) => {
    let user_id = req.query.user_id;

    const authData = await chatkit.authenticate({
      userId: user_id
    });
  
    res.status(authData.status).send(authData.body);
})


authRouter.post('/login', async (req, res) => {
    const username = req.body.username;

    try {
        user = await chatkit.createUser({
            name: username,
            id: username,
        });

        res.sendStatus(201);
    }
    catch (err) {
        err.error === 'services/chatkit/user_already_exists' ? res.sendStatus(200) : res.status(err.status).send(err.error_description);
    }
});

module.exports = authRouter;