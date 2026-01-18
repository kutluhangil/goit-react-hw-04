export default function ImageCard({ image, onClick }) {
  return (
    <div onClick={() => onClick(image)} style={{ cursor: "pointer" }}>
      <img
        src={image.urls.small}
        alt={image.alt_description}
        style={{ width: "100%", height: "200px", objectFit: "cover" }}
      />
    </div>
  );
}
