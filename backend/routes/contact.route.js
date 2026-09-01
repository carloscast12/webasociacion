import { Router } from "express";
import { Resend } from "resend";
import { upload } from "../middleware/upload.middleware.js";

const router = Router();
const resend = new Resend(process.env.RESEND_API_KEY);

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

router.post("/", upload.single("attachment"), async (req, res) => {
  const { name, email, phone, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: "Faltan campos obligatorios: nombre, correo y mensaje." });
  }

  if (!EMAIL_REGEX.test(email)) {
    return res.status(400).json({ error: "El correo electronico no es valido." });
  }

  const attachments = req.file
    ? [{ filename: req.file.originalname, content: req.file.buffer }]
    : undefined;

  try {
    const { error } = await resend.emails.send({
      from: process.env.CONTACT_EMAIL_FROM,
      to: process.env.CONTACT_EMAIL_TO,
      replyTo: email,
      subject: `Nuevo mensaje de contacto - ${name}`,
      html: `
        <p><strong>Nombre:</strong> ${escapeHtml(name)}</p>
        <p><strong>Correo:</strong> ${escapeHtml(email)}</p>
        <p><strong>Telefono:</strong> ${escapeHtml(phone || "No indicado")}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${escapeHtml(message).replace(/\n/g, "<br>")}</p>
      `,
      attachments,
    });

    if (error) {
      console.error("Resend error:", error);
      return res.status(502).json({ error: "No se pudo enviar el correo." });
    }

    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error("Contact route error:", err);
    return res.status(500).json({ error: "Error interno del servidor." });
  }
});

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export default router;
