import pkg from 'pg';

const { Client } = pkg;
const client = new Client({
  host: "localhost",
  user: "postgres",
  password: "Lear@trencyber",
  port: 5432,
  database: "crud_db",
});

client
  .connect()
  .then(() => console.log(`Connected to the database successfully`))
  .catch((err) => console.log(err));

export default client;
