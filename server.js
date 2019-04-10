const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const authRouter = require('./server/authRouter');

const PORT = 5000;
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

app.use('/auth/', authRouter);

module.exports = app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}`);
});