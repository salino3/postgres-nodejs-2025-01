import dotenv from "dotenv";

dotenv.config();

// export const port = process.env.PORT || 3000;

export const {
  USER,
  HOST,
  PASSWORD,
  DATABASE,
  PORT_DB,
  PORT = 3000,
} = process.env;
