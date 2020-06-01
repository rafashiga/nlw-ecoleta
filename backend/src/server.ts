import express from 'express';

const app = express();

app.get('/users', (req, res) => {
	console.log('hello world');

	return res.json({ message: 'ok1' });
});

app.listen(3333);
