import "dotenv/config";
import express from "express";
import cors from "cors";
import rateLimit from "express-rate-limit";
import { MulterError } from "multer";
import contactRoute from "./routes/contact.route.js";

const app = express();

app.use(
  cors({
    origin: process.env.CLIENT_ORIGIN,
  })
);

const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  limit: 10,
  standardHeaders: true,
  legacyHeaders: false,
});

app.use("/api/contact", contactLimiter, contactRoute);

app.use((err, req, res, next) => {
  if (err instanceof MulterError) {
    if (err.code === "LIMIT_FILE_SIZE") {
      return res.status(400).json({ error: "El archivo supera el tamano maximo permitido (5MB)." });
    }
    if (err.code === "LIMIT_UNEXPECTED_FILE") {
      return res.status(400).json({ error: "Tipo de archivo no permitido." });
    }
    return res.status(400).json({ error: "Error al procesar el archivo." });
  }
  console.error(err);
  return res.status(500).json({ error: "Error interno del servidor." });
});

const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
