const express = require("express");
const connectDB = require("./config/db");
// const { chats } = require("./data/data");
const app = express();
const dotenv = require("dotenv");

const colors = require("colors");
const userRoutes = require("./routes/userRoutes");
const chatRoutes = require("./routes/chatRoutes");
const { notFound, errorHandler } = require("./middleware/errorMiddleware");
dotenv.config();
connectDB();

app.use(express.json()); //to accept json data

app.get("/", (req, res) => {
  res.send("API is running....");
});

app.use("/api/user", userRoutes);
app.use("/api/chat", chatRoutes);

app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(5000, console.log(`Server Started on ${PORT}`.yellow.bold));
