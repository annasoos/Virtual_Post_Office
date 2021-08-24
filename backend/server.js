const express = require('express');
const path = require('path');
const server = express(); 
const db = require('./storage/file-database');
const bodyParser = require('body-parser');
const cors = require('cors');

server.use(cors());
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));

// STATIC 

server.use(express.static(path.join(__dirname, '../frontend/build/')));

// INDEX ENDPOINT

server.get("/", (req, res) => {
	res.sendFile(path.join(__dirname, "../frontend/build/index.html"));
});


// GET ALL MAILS

server.get('/api/mails', function (req, res) {
	res.send(db.get("mails").value())
});

// SINGLE MAIL GET

server.get('/api/mails/:refNum', function (req, res) {

	let found = db.get("mails").value().filter(mail => mail.reference === parseInt(req.params.refNum));
	
	if (found.length > 0) {
		res.status(200).json(found);
	} else {
		res.status(404).json({ msg: "No mail found with the given reference number" });
	}
});

// POST NEW MAIL

server.use(express.json());
server.use(express.urlencoded({ extended: false }));

server.post('/api/mails', (req, res) => {

	const refNum = req.body.reference
	const filteredMails = db.get("mails").value().some(mail => mail.reference === refNum);

 	if (filteredMails) {
		res.status(409).json({ msg: "Reference number already exists" });
	} else {
		res.status(200).json({ msg: "Success" })
		db
		.get("mails")
		.push({ from: req.body.from, to: req.body.to, message: req.body.message, reference: parseInt(refNum)})
		.write();
	}

});

// LISTENER

const port = 8080;
server.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`);
});