import express from "express";
import { PORT } from "./config.js";
import userRoutes from "./routes/users.routes.js";
import morgan from "morgan";

// "/c/Program Files/PostgreSQL/17/bin/psql.exe" -U postgres

const app = express();

// 'morgan' Library to check API call, some information, milliseconds also
app.use(morgan("dev"));
app.use(express.json());
app.use(userRoutes);

app.listen(PORT, () => {
  console.log("Server running on port " + PORT);
});
