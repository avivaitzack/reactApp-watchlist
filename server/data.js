import mysql from "mysql2";
import bcrypt from "bcrypt";
import cors from "cors";
import express from "express";
import bodyparser from "body-parser";
import dotenv from 'dotenv';
dotenv.config();
const app = express();
const port = 3001;
app.use(cors());
app.use(express.json());
app.use(bodyparser.urlencoded({ extended: true }));

app.get("/", async (req, res) => {
  res.send(getUser(8));
});
const pool = mysql
  .createPool({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
  })
  .promise();


app.post('/login', async (req, res) => {
const Email = req.body.email
const Password = req.body.password
const user = await findByEmail(Email)
  if (user == null) {
    return res.status(400).send('Cannot find user')
  }
  try {
    if(await bcrypt.compare(Password, user[0].userPassword)) {
      res.send(['Success',[user[0].userId,user[0].userName,user[0].userEmail]])
    } else {
      res.send('Not Allowed')
    }
  }catch {
    res.status(500).send()
  }
})

app.post('/createFav', async (req, res) => {
  const userId = req.body.userId;
  const showId = req.body.showId;
  await createFavorite(userId, showId)
  try {
    if(await createFavorite(userId, showId)) {
      res.send(['Success'])
    } 
  }catch {
    res.status(500).send()
  }
  })


app.listen(port, () => console.log(`app listening on port ${port}!`));



export async function findByEmail(Email) {
  const [user] = await pool.query(
    `SELECT * FROM users WHERE userEmail = ? `,
    [Email]
  );

  return user;
}
export async function getUser(id) {
  const [users] = await pool.query(`SELECT * FROM users WHERE userId = ?`, [
    id,
  ]);
  return users;
}

export async function createUser(Name, Email, Password) {
  let hasedPassword = await bcrypt.hash(Password, 10);
  const [result] = await pool.query(
    `
      INSERT INTO users (userName, userEmail, userPassword)
      VALUES (?, ?, ?)
      `,
    [Name, Email, hasedPassword]
  );
  const id = result.insertId;
  return getUser(id);
}

export async function createFavorite(userid, showid, ) {
  const [result] = await pool.query(
    `
      INSERT INTO favorites (userid, showId)
      VALUES (?, ?)
      `,
    [userid, showid]
  );
  return true;
}