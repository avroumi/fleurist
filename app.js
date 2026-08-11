import express from "express";
import { contacts } from "./config/supabase.js";

export const app = express();

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.post("/contact", async (req, res) => {
  const { data, error } = await contacts.insert(req.body);
  if (error) {
    return res.send(error.message);
  }

  res.send("Message received");
});

app.get("/contacts", async (req, res) => {
  const { data, error } = await contacts.select();
  if (error) {
    return res.send(error.message);
  }
  res.json(data);
});
