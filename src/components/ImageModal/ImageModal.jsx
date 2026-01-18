import Modal from "react-modal";
import css from "./ImageModal.module.css";

Modal.setAppElement("#root");

export default function ImageModal({ isOpen, image, onClose }) {
  if (!image) return null;

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      overlayClassName={css.overlay}
      className={css.modal}
      shouldCloseOnOverlayClick={true}
      shouldCloseOnEsc={true}
      bodyOpenClassName="ReactModal__Body--open"
    >
      <button className={css.closeBtn} onClick={onClose}>
        Close
      </button>

      <img
        src={image.urls.regular}
        alt={image.alt_description}
        className={css.image}
      />

      <div className={css.info}>
        <p>
          <strong>Author:</strong> {image.user.name}
        </p>
        <p>
          <strong>Likes:</strong> {image.likes}
        </p>
      </div>
    </Modal>
  );
}
