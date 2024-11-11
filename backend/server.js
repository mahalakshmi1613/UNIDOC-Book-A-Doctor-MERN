const express = require('express');
const mongoose = require('mongoose');
const app = express();
require('dotenv').config();
const port = process.env.PORT ||3000;
require("./config/dbconfig");
const cors=require("cors");
const userRouter=require("./routes/userRoutes");
const doctorRouter=require("./routes/doctorRoutes");
const appointRouter=require("./routes/appointRoutes");
const path=require("path");

// MongoDB connection
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
    .then(() => console.log('MongoDB connected successfully'))
    .catch((err) => console.error('MongoDB connection error:', err));



app.use(cors());
app.use(express.json());
app.use("/api/user",userRouter);
app.use("/api/doctor",doctorRouter);
app.use("/api/appointment",appointRouter);
app.use(express.static(path.join(__dirname, "../unidoc/build")));

// Catch-all route for React app
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../unidoc/build/index.html"));
});

app.listen(port,() => console.log(`Node Server started at port ${port}`));