import { Gavel, GraduationCap, Scale } from "lucide-react";

const SERVICES = [
  {
    icon: Gavel,
    title: "Centro de Conciliación Castillo Hernández",
    description:
      "Facilitamos la resolución de conflictos familiares, civiles y comerciales a través de audiencias de conciliación conducidas por profesionales acreditados, con actas que cuentan con mérito ejecutivo.",
  },
  {
    icon: GraduationCap,
    title: "Escuela de Conciliadores Estela Hernández",
    description:
      "Formamos conciliadores extrajudiciales a través de programas de capacitación y especialización, orientados a quienes buscan certificarse o actualizar sus conocimientos en la materia.",
  },
  {
    icon: Scale,
    title: "Asesoría Jurídica",
    description:
      "Brindamos orientación legal personalizada para acompañar a nuestros clientes antes, durante y después del proceso de conciliación.",
  },
];

export default function Services() {
  return (
    <section id="servicios" className="services">
      <div className="container">
        <h2 className="section-title">Servicios</h2>
        <div className="services__grid">
          {SERVICES.map((service) => (
            <div key={service.title} className="services__item card-lift">
              <service.icon className="services__icon" strokeWidth={1.5} />
              <h3 className="card-title">{service.title}</h3>
              <p className="card-text">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
