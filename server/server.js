const express = require("express");
const colors = require("colors");
const req = require("express/lib/request");
const dotenv = require("dotenv").config();
const { errorHandler } = require("./middleware/errorMiddleware");
const connectDB = require('./config/db')
const port = process.env.PORT || 4444;

connectDB()

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/songs", require("./routes/music/songRoutes"));
app.use("/api/users", require("./routes/userRoutes"));

app.use(errorHandler);

app.listen(port, () => console.log(`server started on port: ${port}`));
