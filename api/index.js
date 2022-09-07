import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";

import connectDB from "./database/db.js";
import authRoute from './router/auth.js'
import usersRoute from './router/users.js'
import hotelsRoute from './router/hotels.js'
import roomsRoute from './router/rooms.js'
const app = express();

app.use(cors());
app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

 dotenv.config({ path: "./config.env" });
connectDB();
 
// middleware

app.use(cookieParser())
app.use(express.json())

app.use('/api/auth', authRoute);
app.use('/api/users', usersRoute);
app.use('/api/hotels', hotelsRoute);
app.use('/api/rooms', roomsRoute);

app.use((err, req, res, next) => {
  const errorStatus = err.status || 500
  const errorMessage = err.message || "Something went wrong!"
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
});
});

 app.listen(process.env.PORT, () => {
   console.log(`app listening on port ${process.env.PORT}`);
 });
