import express from "express";
import favicon from "serve-favicon";
import { User } from "./models/user";

const app = express();

const PORT = process.env.PORT || 3000;

app.use(favicon(__dirname + "/public/favicon.ico"));
app.use(express.static("/public"));

app.get("/", (req, res) => {
  console.log("test");
  res.send({ text: "Hello World!" });
});

app.get("/noah", (req, res) => {
  const noah: User = { firstName: "Noah", name: "Salvi" };
  res.send(noah);
});

app.listen(PORT, () => console.log("App is listening on port " + PORT));
