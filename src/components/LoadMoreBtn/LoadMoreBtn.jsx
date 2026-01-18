export default function LoadMoreBtn({ onClick }) {
  return (
    <div style={{ textAlign: "center", margin: 20 }}>
      <button onClick={onClick}>Load more</button>
    </div>
  );
}
