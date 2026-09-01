import mama from "../assets/gallery/mama.webp";
import papa from "../assets/gallery/papa.webp";
import pepe from "../assets/gallery/pepe.webp";

const MEMBERS = [
  {
    photo: mama,
    name: "Dra. Estela Hernández",
    role: "Fundadora, Directora y conciliadora",
    bio: "Abogada (USMP) y doctora en Ciencias de la Educación, con maestría en Derecho de los Negocios. Conciliadora Extrajudicial especializada en Derecho de Familia. Capacitadora oficial de conciliadores extrajudiciales, con experiencia como fiscal provincial corporativa en temas de violencia Familiar y fiscalías penales. Hoy es directora de defensa gremial del CAL,en la UNMSM.",
  },
  {
    photo: papa,
    name: "Dr. Walter Castillo",
    role: "Coordinador académico y Abogado",
    bio: "Magistrado cesante del Poder Judicial. Presidente de la Comisión de Indulto y Gracias Presidenciales del Ministerio de Justicia. Procurador Público del Ministerio de Energía y Minas. Secretario General del Ministerio Público. Asesor Congresal. Secretario General de SUNAFIL. Actualmente Árbitro en Centro de Arbitraje Comercial LIMA.",
  },
  {
    photo: pepe,
    name: "Dr. José Castillo",
    role: "Fundador y Secretario General",
    bio: "Abogado (PUCP) y magíster (Freie Universität Berlin, Alemania). Hoy es Jefe Legal y de Cumplimiento de una empresa minera, donde lidera la gestión jurídica, la asesoría regulatoria, minera, administrativa, corporativa y contractual, y el cumplimiento normativo del negocio.",
  },
];

export default function Members() {
  return (
    <section id="miembros" className="members">
      <div className="container">
        <h2 className="section-title">Miembros</h2>
        <div className="members__grid">
          {MEMBERS.map((member) => (
            <div key={member.name} className="members__card card-lift">
              <img
                src={member.photo}
                alt={member.name}
                className="members__photo"
              />
              <h3 className="card-title">{member.name}</h3>
              <p className="members__role">{member.role}</p>
              <p className="card-text">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
