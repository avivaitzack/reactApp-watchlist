import mysql from "mysql2";
import bcrypt from "bcrypt";
import cors from "cors";
import express from "express";
import bodyparser from "body-parser";
const app = express();
const port = 3001;
app.use(cors());
app.use(express.json());
app.use(bodyparser.urlencoded({ extended: true }));

app.get("/", async (req, res) => {
  res.send(getUser(8));
});


app.post('/login', async (req, res) => {
const Email = req.body.email
const Password = req.body.password
let hasdpassword = await bcrypt.hash(Password, 10);
let user = await findByEmail(Email)
  if (user == null) {
    return res.status(400).send('Cannot find user')
  }
  try {
    if(await bcrypt.compare(hasdpassword, user.UserPassword)) {
      res.send('Success')
    } else {
      res.send('Not Allowed')
    }
  } catch {
    res.status(500).send()
  }
})

app.listen(port, () => console.log(`app listening on port ${port}!`));

const pool = mysql
  .createPool({
    host: "127.0.0.1",
    user: "root",
    password: "password",
    database: "mydb",
  })
  .promise();

export async function findByEmail(Email) {
  const [user] = await pool.query(
    `SELECT * FROM users WHERE UserEmail = ? `,
    [Email]
  );

  return user;
}
export async function getUser(id) {
  const [users] = await pool.query(`SELECT * FROM users WHERE UserID = ?`, [
    id,
  ]);
  return users;
}

export async function createUser(Name, Email, Password) {
  let hasedPassword = await bcrypt.hash(Password, 10);
  const [result] = await pool.query(
    `
      INSERT INTO users (UserFullName, UserEmail, UserPassword)
      VALUES (?, ?, ?)
      `,
    [Name, Email, hasedPassword]
  );
  const id = result.insertId;
  return getUser(id);
}



