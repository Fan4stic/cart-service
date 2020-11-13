const mysql = require('mysql');

var connection = mysql.createConnection({
  user: 'root',
  password: 'P@$$W0rd1',
  database: 'cart'
});

connection.connect((err) => {
  if (err) {
    console.err('error connecting: ' + err.stack);
    return;
  }

  console.log('connected as id ' + connection.threadId);
});

module.exports.connection = connection;