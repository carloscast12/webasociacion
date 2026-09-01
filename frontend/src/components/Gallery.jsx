import foto1 from "../assets/gallery/foto1.webp";
import foto2 from "../assets/gallery/foto2.webp";
import foto3 from "../assets/gallery/foto3.webp";
import foto4 from "../assets/gallery/foto4.webp";

const PHOTOS = [
  { src: foto1, alt: "Fotografía del centro de conciliación 1" },
  { src: foto2, alt: "Fotografía del centro de conciliación 2" },
  { src: foto3, alt: "Fotografía del centro de conciliación 3" },
  { src: foto4, alt: "Fotografía del centro de conciliación 4" },
];

export default function Gallery() {
  return (
    <div className="gallery">
      {PHOTOS.map((photo) => (
        <img key={photo.src} src={photo.src} alt={photo.alt} className="gallery__photo card-lift" />
      ))}
    </div>
  );
}
