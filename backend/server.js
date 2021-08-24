const express = require('express');
const path = require('path');
const server = express(); 

// STATIC 

server.use(express.static(path.join(__dirname, '../frontend/build/static')));

// INDEX ENDPOINT

server.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/build/index.html"));
});

// MAILS

const mails = [
	{
		from: "John Doe", to: "Mary Louise", message: "Dear Mary, Please send me the necessary documents so I can finalize the contract. Thank you, John", reference: 762335
	},
	{
		from: "Jane Doe", to: "John Doe", message: "Hi John! I will be waiting for you at the train station at 9 o'clock tomorrow. Love, Jane", reference: 983658
	},
	{
		from: "Elliot Stevens", to: "Nick Ford", message: "Nick, please call me ASAP! Elliot", reference: 152436
	},
	{
		from: "Amy Johnson", to: "Ronald Schultz", message: "Ron! I called you two weeks ago...Can you please call me back? It's important! Amy", reference: 112999
	},
	{
		from: "Clark Evergreen", to: "Amanda Evergreen", message: "My lovely Amanda, I love you very much! See you soon! Clark", reference: 672939
	}
];

// MAILS GET

server.get('/api/mails', function (req, res) {
	res.send(mails)
});

// SINGLE MAIL GET

server.get('/api/mails/:refNum', function (req, res) {

	let found = mails.filter(mail => mail.reference === parseInt(req.params.refNum));
	
	if (found.length > 0) {
		res.json(found);
	} else {
		res.status(404).json({ msg: "No mail found with the given reference number" });
	}
});

// MAILS POST

server.use(express.json());
server.use(express.urlencoded({ extended: false }));

server.post('/api/mails', (req, res) => {

	const refNum = req.body.reference
	const filteredMails = mails.some(mail => mail.reference === parseInt(refNum));

 	if (filteredMails) {
		res.status(409).json({ msg: "Reference number already exists" });
	} else {
		mails.push(req.body)
		res.end()
	}

});

// LISTENER

const port = 8080;
server.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});