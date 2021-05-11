const { Client } = require('pg')

// const dotenv = require('dotenv');
// dotenv.config();

exports.handler = async (event, context, cb) => {
  const client = new Client({
    user: 'postgres',
    // host: process.env.HOST,
    database: 'flashcards2',
    // password: process.env.PASSWORD,
    port: 5432,
  });

  client.connect()
  client.query('SELECT * from public."Flashcards"', (err, res) => {
    if (err) throw err
    console.log(res.rows)
    client.end()
  })

//   const pool = new Pool({
//     user: 'postgres',
//     host: process.env.HOST,
//     // database: 'flashcards-2',
//     password: process.env.PASSWORD,
//     port: process.env.PORT,
//   });

//   pool.on('error', (err, client) => {
//     console.error('Unexpected error on idle client', err)
//     process.exit(-1)
//   })
//   // callback - checkout a client
//   pool.connect((err, client, done) => {
//     if (err) throw err
//     client.query("SELECT * FROM public.flashcards", (err, res) => {
//       done()
//       if (err) {
//         console.log(err.stack)
//       } else {
//         console.log(res.rows[0])
//       }
//     })
//   })
//   await pool.end()

}