const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost 4000',
  user: 'joao.silva',
  password: 'senhaj1',
  database: 'fatec'
});

connection.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados: ' + err.stack);
    return;
  }
  console.log('Conexão bem sucedida ao banco de dados');
});

connection.query('SELECT * FROM cadastro', (err, results) => {
  if (err) throw err;

  for (let i = 0; i < results.length; i++) {
    console.log(results[i]);
  }
});

connection.end();