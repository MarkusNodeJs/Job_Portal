import express from "express";

// DOTENV
const port = 5000;

// REST object
const app = express;

// middlewares
app.use(express.json());

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
