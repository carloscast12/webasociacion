import { Mail, Phone } from "lucide-react";
import LegalDialog from "./LegalDialog";

// lucide-react no incluye logos de marcas (solo íconos genéricos)
function FacebookIcon(props) {
  return (
    <svg
      width={18}
      height={18}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}

const FACEBOOK_URL = "https://www.facebook.com/share/1Mcrq8EGMm/?mibextid=wwXIfr";
const CONTACT_EMAIL = "asociacioncastillohernandez12@gmail.com";
const CONTACT_ADDRESS = "Jr. Apurímac 459, oficina 04 - Cercado de Lima, Perú";
const PHONES = [
  { display: "+51 956 383 256", href: "+51956383256" },
  { display: "+51 960 415 600", href: "+51960415600" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div>
            <p className="footer__brand">Asociación Castillo Hernández</p>
            <p className="footer__address">{CONTACT_ADDRESS}</p>
          </div>
          <div className="footer__social">
            <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <FacebookIcon />
            </a>
            <a href={`mailto:${CONTACT_EMAIL}`} aria-label="Correo">
              <Mail size={18} />
            </a>
            {PHONES.map((phone) => (
              <a key={phone.href} href={`tel:${phone.href}`} aria-label="Teléfono">
                <Phone size={18} />
                <span>{phone.display}</span>
              </a>
            ))}
          </div>
        </div>

        <div className="footer__bottom">
          <div className="footer__legal">
            <LegalDialog label="Política de Privacidad" title="Aviso de Privacidad">
              <p>
                <strong>Responsable del tratamiento.</strong> Asociación Castillo
                Hernández, con RUC [RUC] y domicilio en [DIRECCIÓN], es responsable
                del tratamiento de los datos personales que nos proporcionas a
                través de este sitio web.
              </p>
              <p>
                <strong>Datos que recopilamos.</strong> Cuando completas el
                formulario de contacto, recopilamos tu nombre, correo electrónico,
                teléfono (si lo indicas) y el contenido de tu mensaje, así como
                cualquier archivo que decidas adjuntar.
              </p>
              <p>
                <strong>Finalidad.</strong> Estos datos se usan exclusivamente
                para responder a tu consulta. No los usamos con fines
                publicitarios ni los compartimos con terceros.
              </p>
              <p>
                <strong>Almacenamiento.</strong> Los mensajes se envían
                directamente por correo electrónico a nuestra casilla de
                contacto. No almacenamos tus datos en ninguna base de datos ni
                servidor propio más allá de esa comunicación.
              </p>
              <p>
                <strong>Cookies.</strong> Este sitio no utiliza cookies de
                análisis, publicidad ni rastreo. No recopilamos información de
                navegación con fines de seguimiento.
              </p>
              <p>
                <strong>Tus derechos.</strong> De acuerdo con la Ley N° 29733,
                Ley de Protección de Datos Personales del Perú, tienes derecho a
                acceder, rectificar, cancelar u oponerte al tratamiento de tus
                datos personales (derechos ARCO). Para ejercerlos, escríbenos a{" "}
                {CONTACT_EMAIL}.
              </p>
              <p>
                <strong>Cambios.</strong> Podemos actualizar este aviso en
                cualquier momento; la versión vigente siempre estará disponible
                en este sitio.
              </p>
            </LegalDialog>

            <LegalDialog label="Términos y Condiciones" title="Términos y Condiciones">
              <p>
                Al usar este sitio web, aceptas los presentes términos y
                condiciones.
              </p>
              <p>
                El contenido de este sitio (textos, imágenes, logotipo) es
                propiedad de la Asociación Castillo Hernández y no puede
                reproducirse sin autorización.
              </p>
              <p>
                La información publicada en este sitio tiene fines
                informativos y no constituye asesoría legal. El envío de un
                mensaje a través del formulario de contacto no establece una
                relación de representación legal ni de conciliador-usuario
                hasta que se formalice mediante los canales correspondientes.
              </p>
              <p>
                Nos esforzamos por mantener la información del sitio
                actualizada, pero no garantizamos que esté libre de errores en
                todo momento.
              </p>
              <p>
                Estos términos se rigen por las leyes de la República del
                Perú.
              </p>
              <p>
                Ante cualquier duda sobre estos términos, puedes escribirnos a{" "}
                {CONTACT_EMAIL}.
              </p>
            </LegalDialog>
          </div>
          <p className="footer__copyright">© {year} Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
