const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const authRouter = require('./server/authRouter');
const messageRouter = require('./server/messageRouter');

const PORT = process.env.PORT || 8080;
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.use('/api/auth/', authRouter);
app.use('/api/message/', messageRouter);

module.exports = app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}`);
});