import { pool } from "../db.js";

export const getUsers = async (req, res) => {
  const { rows } = await pool.query("SELECT * FROM users");
  console.log(rows);
  res.json(rows);
};

export const getUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { rows } = await pool.query("SELECT * FROM users WHERE id = $1", [
      id,
    ]);

    if (rows.length === 0) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.json(rows[0]);
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const createUser = async (req, res) => {
  try {
    const data = req.body;

    const { rows } = await pool.query(
      "INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *",
      [data.name, data.email]
    );
    console.log(rows);
    res.json(rows[0]);
  } catch (error) {
    if (error?.code === "23505") {
      // duplicate key
      return res
        .status(409)
        .json({ message: "Email already existe in the database" });
    }
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const deleteuser = async (req, res) => {
  try {
    const { id } = req.params;
    const { rows, rowCount } = await pool.query(
      "DELETE FROM users WHERE id = $1 RETURNING *",
      [id]
    );

    if (rowCount === 0) {
      return res.status(404).json({ message: "User not found" });
    }
    console.log("ROW", rowCount);
    if (rowCount === 1) {
      return res.status(200).json({ message: "User deleted", user: rows[0] });
    }
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};

export const updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;
    const { rows, rowCount } = await pool.query(
      "UPDATE users SET name = $1, email = $2 WHERE id = $3 RETURNING *",
      [data.name, data.email, id]
    );
    console.log("Row Count: ", rowCount);
    res.json(rows[0]);
  } catch (error) {
    return res.status(500).json({ message: "Internal server error" });
  }
};
