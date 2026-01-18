import { TailSpin } from "react-loader-spinner";

export default function Loader() {
  return (
    <div style={{ display: "flex", justifyContent: "center", margin: 20 }}>
      <TailSpin height={50} width={50} color="#3f51b5" />
    </div>
  );
}
