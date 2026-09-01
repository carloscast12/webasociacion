import { useState } from "react";

const API_URL = import.meta.env.VITE_API_URL || "http://localhost:4000";

export default function ContactForm() {
  const [status, setStatus] = useState("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event) {
    event.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const form = event.target;

    try {
      const response = await fetch(`${API_URL}/api/contact`, {
        method: "POST",
        body: new FormData(form),
      });
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "No se pudo enviar el mensaje.");
      }

      setStatus("success");
      form.reset();
    } catch (error) {
      setStatus("error");
      setErrorMessage(error.message);
    }
  }

  if (status === "success") {
    return (
      <div className="contact__success">
        <h3>Mensaje enviado</h3>
        <p className="text-muted">Gracias por escribirnos. Te responderemos a la brevedad.</p>
      </div>
    );
  }

  return (
    <form className="contact__form" onSubmit={handleSubmit}>
      <div className="field">
        <label htmlFor="name">Nombre</label>
        <input id="name" name="name" type="text" required />
      </div>

      <div className="field-row">
        <div className="field">
          <label htmlFor="email">Correo electrónico</label>
          <input id="email" name="email" type="email" required />
        </div>

        <div className="field">
          <label htmlFor="phone">Teléfono (opcional)</label>
          <input id="phone" name="phone" type="tel" />
        </div>
      </div>

      <div className="field">
        <label htmlFor="message">Mensaje</label>
        <textarea id="message" name="message" rows={5} required />
      </div>

      <div className="field">
        <label htmlFor="attachment">Adjuntar archivo (opcional, máx. 5MB)</label>
        <input
          id="attachment"
          name="attachment"
          type="file"
          accept=".pdf,.jpg,.jpeg,.png,.doc,.docx"
        />
      </div>

      {status === "error" && <p className="field__error">{errorMessage}</p>}

      <button type="submit" className="button button--primary" disabled={status === "submitting"}>
        {status === "submitting" ? "Enviando..." : "Enviar mensaje"}
      </button>
    </form>
  );
}
