import express from "express";
import propietarioRoutes from "./routes/propietarioRoutes";

const app = express();

app.use(express.json());

app.use(propietarioRoutes);

app.listen(3000, () => {
  console.log("App is running on port http://localhost:3000")
});