import express, { response } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import fs from "fs";
import dotenv from "dotenv";
import { neon } from "@neondatabase/serverless";
dotenv.config();

const app = express();
const PORT = 5000;
const sql = neon(`${process.env.DATABASE_URL}`);

app.use(bodyParser.json());
app.use(cors());

app.get("/", async (request, response) => {
  try {
    const sqlResponse = await sql`SELECT * FROM users`;
    response.json({ data: sqlResponse, success: true });
  } catch (error) {
    response.json({ error: error, success: false });
  }
});

app.get("/records", async (request, response) => {
  try {
    const sqlResponse = await sql`SELECT * FROM record`;
    response.json({ data: sqlResponse, success: true });
  } catch (error) {
    response.json({ error: error, success: false });
  }
});

app.get("/category", async (request, response) => {
  try {
    const sqlResponse = await sql`SELECT * FROM category`;
    response.json({ data: sqlResponse, success: true });
  } catch (error) {
    response.json({ error: error, success: false });
  }
});

app.post("/sign-up", async (request, response) => {
  const { name, email, password } = request.body;

  try {
    const existingUser = await sql`SELECT * FROM users WHERE email = ${email}`;

    if (existingUser.length > 0) {
      return response.status(400).json({ message: "User already exists" });
    }

    const newUser = await sql`
        INSERT INTO users (name, email, password)
        VALUES (${name}, ${email}, ${password})
        RETURNING id, email
    `;

    response
      .status(201)
      .json({ message: "User created successfully", user: newUser[0] });
  } catch (error) {
    response
      .status(500)
      .json({ message: "Internal server error during create user" });
  }
});

app.post("/", async (request, response) => {
  const { email, password } = request.body;

  try {
    const user = await sql`SELECT * FROM users WHERE email = ${email}`;
    if (user.length === 0) {
      return response
        .status(400)
        .json({ message: "email or password not match" });
    }

    if (user[0].password !== password) {
      return response.status(400).json({ message: "password not match" });
    }

    response.status(200).json({ message: "Login successful", user: user[0] });
  } catch (error) {
    response
      .status(500)
      .json({ message: "Internal server error during login user" });
  }
});

////////////////////////////////////////////////////////////////////////////////////////////////////////

app.post("/records", async (request, response) => {
  const { user_id, name, amount, transaction_type, description, category_id } =
    request.body;

  try {
    const record = await sql`
      INSERT INTO category (user_id, name, amount, transaction_type, description, category_id ) 
      VALUES ( ${user_id}, ${name}, ${amount}, ${transaction_type}, ${description}, ${category_id})`;

    response.json({
      message: `asdfasdfasdf`, ////
      record,
    });
  } catch (error) {
    response
      .status(500)
      .json({ message: "Blah blah jfkdsjakl;sdfjkslajfkl;dsajkl" }); ////
  }
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
