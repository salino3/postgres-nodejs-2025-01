import pg from "pg";

const { USER, HOST, PASSWORD, DATABASE, PORT_DB } = process.env;

export const pool = new pg.Pool({
  user: USER,
  host: HOST,
  password: PASSWORD,
  database: DATABASE,
  port: PORT_DB,
});

// pool.query("SELECT NOW()").then((result) => {
//   console.log("Result: ", result);
// });
