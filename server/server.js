const express = require("express");
const req = require("express/lib/request");
const dotenv = require("dotenv").config();
const { errorHandler } = require("./middleware/errorMiddleware");
const port = process.env.PORT || 4444;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/goals", require("./routes/goalRoutes"));

app.use(errorHandler);

app.listen(port, () => console.log(`server started on port: ${port}`));
