const authRouter = require('express').Router();
const chatkit = require('./chatkit');

authRouter.post('/', async (req, res) => {
    let user_id = req.query.user_id;

    try {
        const authData = await chatkit.authenticate({
            userId: user_id
        });
    
        res.status(authData.status).send(authData.body);
    }
    catch (err) {
        console.log(err);
    }
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