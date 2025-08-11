import express from "express";


const port = process.env.PORT || 3000;
const app = express();  // this was missing

app.get("/api/upload", (req, res) => {
  res.send("It works");
});

app.listen(port, () => {
  
  console.log(`Server running on port ${port}`);
});
