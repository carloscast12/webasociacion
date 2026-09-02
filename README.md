# Asociación Castillo Hernández — Landing Page

🇺🇸 [English](#english) · 🇵🇪 [Español](#español)

**Live site:** [justiciahernandez.com](https://justiciahernandez.com)

---

## English

Real client project: a landing page for a family-run conciliation center, mediator training school, and legal advisory firm based in Lima, Peru. Built end-to-end — design, frontend, backend, deployment, and domain/email setup.

### Stack

- **Frontend:** React + Vite, plain CSS (no framework), [lucide-react](https://lucide.dev/) icons
- **Backend:** Node.js + Express, [Multer](https://github.com/expressjs/multer) for file uploads, [Resend](https://resend.com) for transactional email
- **Deployment:** Netlify (frontend) + Render (backend), custom domain with DKIM/SPF/DMARC verified through Resend

### Features

- Responsive one-page site: hero, company history, services, team, contact
- Contact form that emails the submission directly to the business inbox, with an optional file attachment (PDF/JPG/PNG/DOC/DOCX, up to 5MB)
- Backend validation: file type/size limits, rate limiting, CORS restricted to the production domain
- Privacy policy / terms of service shown in a modal built with the native `<dialog>` element — no UI library
- Image pipeline (Sharp) that generates consistent, optimized square crops for team and gallery photos from arbitrary source images

### Project structure

```
frontend/   React + Vite app
backend/    Express API (contact form → email)
```

### Local development

```bash
# Backend
cd backend
npm install
cp .env.example .env   # fill in RESEND_API_KEY, CONTACT_EMAIL_FROM/TO, CLIENT_ORIGIN
npm run dev

# Frontend
cd frontend
npm install
cp .env.example .env   # set VITE_API_URL to the backend's local URL
npm run dev
```

---

## Español

Proyecto real para un cliente: landing page de un centro de conciliación familiar, escuela de formación de conciliadores y asesoría jurídica, con sede en Lima, Perú. Construido de punta a punta — diseño, frontend, backend, despliegue y configuración de dominio/correo.

### Stack

- **Frontend:** React + Vite, CSS plano (sin framework), íconos de [lucide-react](https://lucide.dev/)
- **Backend:** Node.js + Express, [Multer](https://github.com/expressjs/multer) para archivos adjuntos, [Resend](https://resend.com) para el envío de correo transaccional
- **Despliegue:** Netlify (frontend) + Render (backend), dominio propio con DKIM/SPF/DMARC verificados en Resend

### Funcionalidades

- Sitio de una sola página, responsive: inicio, historia de la empresa, servicios, equipo, contacto
- Formulario de contacto que envía el mensaje directo al correo del negocio, con archivo adjunto opcional (PDF/JPG/PNG/DOC/DOCX, hasta 5MB)
- Validación en el backend: tipo y tamaño de archivo, límite de solicitudes, CORS restringido al dominio de producción
- Aviso de privacidad y términos y condiciones mostrados en un modal hecho con el elemento nativo `<dialog>` — sin librerías de UI
- Pipeline de imágenes (Sharp) que genera recortes cuadrados optimizados y consistentes para las fotos del equipo y la galería, a partir de fotos originales de cualquier tamaño

### Estructura del proyecto

```
frontend/   Aplicación React + Vite
backend/    API en Express (formulario de contacto → correo)
```

### Desarrollo local

```bash
# Backend
cd backend
npm install
cp .env.example .env   # completar RESEND_API_KEY, CONTACT_EMAIL_FROM/TO, CLIENT_ORIGIN
npm run dev

# Frontend
cd frontend
npm install
cp .env.example .env   # apuntar VITE_API_URL al backend local
npm run dev
```
