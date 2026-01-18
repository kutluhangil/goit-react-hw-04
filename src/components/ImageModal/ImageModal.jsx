import Modal from "react-modal";

Modal.setAppElement("#root");

export default function ImageModal({ isOpen, image, onClose }) {
  if (!image) return null;

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      overlayClassName="overlay"
      className="modal"
      shouldCloseOnOverlayClick={true}
      shouldCloseOnEsc={true}
    >
      <img
        src={image.urls.regular}
        alt={image.alt_description}
        style={{
          maxWidth: "100%",
          maxHeight: "70vh",
          objectFit: "contain",
        }}
      />

      <p>
        <strong>Author:</strong> {image.user.name}
      </p>
      <p>
        <strong>Likes:</strong> {image.likes}
      </p>

      <button
        onClick={onClose}
        style={{
          marginTop: "10px",
          padding: "8px 16px",
          cursor: "pointer",
        }}
      >
        Close
      </button>
    </Modal>
  );
}
