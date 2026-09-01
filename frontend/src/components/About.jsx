import Gallery from "./Gallery";

export default function About() {
  return (
    <section id="nosotros" className="about">
      <div className="container">
        <h2 className="section-title">Nuestra historia</h2>
        <div className="about__story">
          <p className="text-muted">
            La Asociación Castillo Hernández fue fundada en 2013 en la ciudad
            de Lima, Perú, por la Dra. Estela Hernández, junto al Dr. Walter
            Castillo Yataco y el Dr. José Castillo Hernández, consolidándose
            desde sus inicios como un proyecto familiar con visión
            profesional.
          </p>
          <p className="text-muted">
            A lo largo de su trayectoria, la Asociación ha ampliado
            progresivamente su oferta de servicios: comenzó como Centro de
            Conciliación, incorporó posteriormente un Centro de Formación para
            Conciliadores y, finalmente, sumó el servicio de Asesoría
            Jurídica, ofreciendo hoy una atención integral en el ámbito del
            derecho y la resolución de conflictos.
          </p>
        </div>
        <Gallery />
      </div>
    </section>
  );
}
