import { type Pool, createPool } from "mysql2";

const pool: Pool = createPool({
  user: "root",
  password: "password",
  host: "localhost",
  database: "databaseName",
  connectionLimit: 100,
  maxIdle: 10,
  queueLimit: 0,
});

export default pool;
