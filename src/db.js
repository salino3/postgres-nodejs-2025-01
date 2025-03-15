import pg from "pg";
import { DATABASE, HOST, PASSWORD, PORT_DB, USER } from "./config.js";

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
