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

app.use("/api/music", require("./routes/music/musicRoutes"));
app.use("/api/films", require("./routes/film/filmRoutes"));
app.use("/api/games", require("./routes/game/gameRoutes"));
app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/art/paintings", require("./routes/art/paintingRoutes"));
app.use("/api/art/poems", require("./routes/art/poemRoutes"));
app.use("/api/books/", require("./routes/book/bookRoutes"));
app.use(errorHandler);

app.listen(port, () => console.log(`server started on port: ${port}`));
