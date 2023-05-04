export default function Modal({ modalImg, imageClick }) {
  return (
    <div className="modal" onClick={imageClick}>
      <img src={modalImg} alt="modal" />
    </div>
  );
}
