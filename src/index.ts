import express from "express";

const app = express();

const welcomeStrings = [
  "Hello Express!",
  "Sou a API da dani Linda Maravilhasa",
];

app.get("/", (_req, res) => {
  res.send(welcomeStrings.join("\n\n"));
});

export default app;
