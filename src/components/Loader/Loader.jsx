import { Oval } from "react-loader-spinner";

export default function Loader() {
  return (
    <div style={{ display: "flex", justifyContent: "center", padding: "20px" }}>
      <Oval height={40} width={40} color="#000" />
    </div>
  );
}
