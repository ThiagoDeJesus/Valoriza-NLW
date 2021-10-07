import express, { response } from "express";

const app = express();

app.get("/test", (request, response) => {
  return response.send("Olá NLW");
});

app.post("/test-post", () => {
  return response.send("Olá NLW com Post");
});

app.listen(3000, () => {
  console.log("server is running");
});
