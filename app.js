express = require("express");
const bodyParser = require("body-parser");
app = express();
port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.use("/static", express.static("public"));

app.set("view engine", "pug");

app.get("/", (req, res) => {
  res.render("bmi");
});

app.post("/", (req, res) => {
  let age = req.body.age;
  let weight = parseFloat(req.body.weight);
  let height = parseFloat(req.body.height);
  let bmi = weight / Math.pow(height / 100, 2);
  let bmiResult = bmi.toFixed(1);

  res.render("bmi", {
    bmiResult,
    age,
    weight,
    height,
  });
});

// Start the server
app.listen(3000, () => {
  console.log("Server started on port 3000");
});
