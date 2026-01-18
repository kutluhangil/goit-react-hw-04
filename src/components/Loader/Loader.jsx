import { Oval } from "react-loader-spinner";
import css from "./Loader.module.css";

export default function Loader() {
  return (
    <div className={css.loader}>
      <Oval height={40} width={40} color="var(--color-primary)" secondaryColor="var(--color-primary-dark)" />
    </div>
  );
}
