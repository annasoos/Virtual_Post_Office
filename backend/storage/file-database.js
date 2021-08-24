const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');

const adapter = new FileSync('./storage/db.json');
const db = low(adapter);

initDb(db);

function initDb(db) {
  db.defaults({ mails: [] }).write();
  if (!db.get('mails').size().value()) {
    db.get('mails')
      .push({
				from: "John Doe", to: "Mary Louise", message: "Dear Mary, Please send me the necessary documents so I can finalize the contract. Thank you, John", reference: 762335
			})
      .push({
				from: "Jane Doe", to: "John Doe", message: "Hi John! I will be waiting for you at the train station at 9 o'clock tomorrow. Love, Jane", reference: 983658
			})
      .push({
				from: "Elliot Stevens", to: "Nick Ford", message: "Nick, please call me ASAP! Elliot", reference: 152436
			})
      .push({
				from: "Amy Johnson", to: "Ronald Schultz", message: "Ron! I called you two weeks ago...Can you please call me back? It's important! Amy", reference: 112999
			})
      .write();
  }
}

module.exports = db;
