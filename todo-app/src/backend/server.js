const express = require("express"); // require express framework
const bodyParser = require('body-parser'); // body parser for patch req
const cors = require('cors'); //Cross-Origin Resource Sharing
const PORT = process.env.PORT || 3003;
const todoRoutes = require("./routes/todoRoutes");
const app = express();

app.use(bodyParser.json()) //body parser middleware
app.use(cors()) //Cross sharing middleware
app.use("/api/todoRoutes", todoRoutes)

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
