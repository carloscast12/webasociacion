import { useRef } from "react";

export default function LegalDialog({ label, title, children }) {
  const dialogRef = useRef(null);

  function handleBackdropClick(event) {
    if (event.target === dialogRef.current) {
      dialogRef.current.close();
    }
  }

  return (
    <>
      <button
        type="button"
        className="footer__legal-link"
        onClick={() => dialogRef.current.showModal()}
      >
        {label}
      </button>
      <dialog ref={dialogRef} className="legal-dialog" onClick={handleBackdropClick}>
        <h2 className="section-title">{title}</h2>
        <div className="legal-dialog__body">{children}</div>
        <button
          type="button"
          className="button button--ghost"
          onClick={() => dialogRef.current.close()}
        >
          Cerrar
        </button>
      </dialog>
    </>
  );
}
