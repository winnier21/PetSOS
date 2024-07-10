import express from "express";
import cors from "cors";
import "dotenv/config";
import chatgptRoutes from "./routes/_chatgpt.js";
import navigationRoutes from "./routes/_navigation.js";
import getTimestamp from "../client/src/utils/utils.js";

const app = express();
app.use(cors({
    origin: 'http://localhost:5173'  // Adjust the origin according to your client's URL in production
  }));

const PORT = process.env.PORT || 3030;
const BACKEND_URL = process.env.BACKEND_URL;

app.use(express.json());
app.use("/api/homepage", chatgptRoutes);
app.use("/api/navigation", navigationRoutes);


app.listen(PORT, () => {
  console.log(`Server Started on ${BACKEND_URL}:${PORT} at ${getTimestamp()}`);
  console.log("Press CTRL + C to stop server");
});