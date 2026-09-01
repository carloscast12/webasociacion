import heroPhoto from "../assets/gallery/foto1.webp";

export default function Hero() {
  return (
    <section id="top" className="hero">
      <div className="container hero__grid">
        <div>
          <p className="hero__eyebrow">Conciliación extrajudicial</p>
          <h1 className="hero__title">
            Resolvemos conflictos y formamos conciliadores con criterio y
            rigor profesional
          </h1>
          <p className="hero__subtitle text-muted">
            Centro de conciliación autorizado y escuela de formación de
            conciliadores. Acompañamos cada proceso con experiencia,
            confidencialidad y respaldo legal.
          </p>
          <div className="hero__actions">
            <a href="#contacto" className="button button--primary">
              Escríbenos
            </a>
            <a href="#servicios" className="button button--ghost">
              Ver servicios
            </a>
          </div>
        </div>
        <div className="hero__photo-wrap">
          <img
            src={heroPhoto}
            alt="Dra. Estela Hernández, directora"
            className="hero__photo"
          />
        </div>
      </div>
    </section>
  );
}
