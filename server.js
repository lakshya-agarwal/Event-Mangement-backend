const express = require("express");
const errorHandler = require("./middleware/errorHandler");
const rundbConfig = require("./config/dbConnection");

const env = require("dotenv").config();
rundbConfig.connect();
const app = express();
const port = process.env.PORT;

app.listen(port,()=>{
    console.log(`server running on port ${port}`)
})

app.get('/api/hello', (req, res) => {
    res.json({ message: 'Hello from the API!' });
  });
app.use(express.json());

app.use("/events",require("./routes/eventRoutes"))
app.use("/user",require("./routes/userRoutes"))
app.use(errorHandler);