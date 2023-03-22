const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost 4000',
  user: 'joao.silva',
  password: 'senhaj1',
  database: 'fatec'
});

connection.connect((err) => {
  if (err) throw err;
  console.log('Conexão com o banco de dados estabelecida!');
});

connection.query('SELECT * FROM aluno;', (err, results) => {
  if (err) throw err;
  console.log(results);
});