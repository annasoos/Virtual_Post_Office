const express = require('express');
const path = require('path');
const server = express(); 

// STATIC 

server.use('/static', express.static(path.join(__dirname, '../frontend/build/static')));

// INDEX ENDPOINT

server.get('/', (req, res) => {
  res.sendFile('index.html', {root: path.join(__dirname, '../frontend/build/')});
});

// MAILS

const mails = [
	{
		from: "Captain America", to: "Avangers", message: "Avangers assemble!", reference: 762335
	},
	{
		from: "Pocahontas", to: "John Smith", message: "Messze hív a nagy folyó", reference: 983658
	},
	{
		from: "Kossuth Lajos", to: "Magyarok", message: "Elfogyott a regimentem :(", reference: 152436
	},
	{
		from: "Bátor a gyáva kutya", to: "Muriel", message: "Vakk", reference: 152999
	},
	{
		from: "Hupikék Törpikék", to: "Hókuszpók", message: "Mi vagyunk az icikék, mi vagyunk a picikék, a hupikék törpikék", reference: 152999
	},
]

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
		res.status(404).json({ msg: "No message found with the given reference number"});
	}
});

// MAILS POST

server.use(express.json());
server.use(express.urlencoded({ extended: false }));

server.post('/api/mails', (req, res) => {

	const refNum = req.body.reference
	const filteredMails = mails.some(mail => mail.reference === parseInt(refNum));

	if (filteredMails) {

		res.status(404).json({ msg: "Reference number already exists"});

	} else {

		mails.push(req.body)
		res.json(mails)
	}

});

// LISTENER

const port = 8080;
server.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});