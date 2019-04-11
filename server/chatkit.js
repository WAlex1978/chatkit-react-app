const Chatkit = require('@pusher/chatkit-server');

const chatkit = new Chatkit.default({
    instanceLocator: 'v1:us1:84bda248-30a1-4e3d-a309-b861f80ca47e',
    key: '23a86e19-dd12-4e68-86be-8de74b244ee7:fWn8LWlyxwvx1DUT+4Duza9rDmSpBfq5IKXT05fMikY=',
})

module.exports = chatkit;