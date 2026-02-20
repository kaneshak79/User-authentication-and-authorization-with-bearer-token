import express from "express";
import dotenv from "dotenv";
import connectDB from "./Database/config.js";
import userRoutes from './Routers/user.router.js'

dotenv.config();
const app = express();
app.use(express.json());

connectDB();

/* ✅ Root route */
app.get("/", (req, res) => {
  res.send("User Auth API Running");
});

/* API routes */
app.use("/api/user", userRoutes);

/* Port config */
const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
