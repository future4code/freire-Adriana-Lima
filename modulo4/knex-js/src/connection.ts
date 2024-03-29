import knex from 'knex';
import dotenv from 'dotenv';

dotenv.config();
// estabelecer a conexão com o banco no index.ts:

const connection = knex({
	client: "mysql",
	connection: {
    host: process.env.DB_HOST,
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_SCHEMA,
    multipleStatements: true
  }
});

export default connection;