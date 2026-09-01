import ContactForm from "./ContactForm";

export default function Contact() {
  return (
    <section id="contacto" className="contact">
      <div className="container contact__grid">
        <div className="contact__intro">
          <h2 className="section-title">Conversemos</h2>
          <p className="text-muted">
            Escríbenos tu consulta y, si lo necesitas, adjunta el documento
            correspondiente (solicitud, contrato u otro sustento). Te
            responderemos por correo a la brevedad.
          </p>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
