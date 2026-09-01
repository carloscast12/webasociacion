import sharp from "sharp";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

// ============================================================
// EDITA AQUÍ: qué parte de cada foto se conserva al recortarla
// a cuadrado. Si una foto no aparece en esta lista, se recorta
// sola tratando de adivinar la zona más interesante.
//
// Valores posibles: "top", "bottom", "left", "right", "center"
// ============================================================
const RECORTES = {
  "foto3.PNG": "center",
  "pepe.png": "top",
};

// --- de aquí para abajo no necesitas tocar nada ---

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const srcDir = path.join(__dirname, "..", "src", "assets");
const outDir = path.join(__dirname, "..", "src", "assets", "gallery");
const files = [
  "foto1.PNG",
  "foto2.PNG",
  "foto3.PNG",
  "foto4.PNG",
  "mama.png",
  "papa.png",
  "pepe.png",
];

for (const file of files) {
  const inputPath = path.join(srcDir, file);
  const name = path.basename(file, path.extname(file)).toLowerCase();
  const outputPath = path.join(outDir, `${name}.webp`);
  const recorte = RECORTES[file] ?? "attention";

  await sharp(inputPath)
    .resize({ width: 800, height: 800, fit: "cover", position: recorte })
    .webp({ quality: 78 })
    .toFile(outputPath);

  const outSize = fs.statSync(outputPath).size;
  console.log(
    `${file} -> ${name}.webp (${(outSize / 1024).toFixed(0)}KB, recorte: ${recorte})`,
  );
}
