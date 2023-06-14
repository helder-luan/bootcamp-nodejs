import express from "express";
import marcasRouter from "./routes/marca.js";
const PORT = 7878;
const app = express();

app.use(express.json());

app.use('/marcas', marcasRouter);

app.listen(PORT, () => {
  console.log(`Server is running on: http://localhost:${PORT}`);
})