import styles from "../styles/Home.module.css";
import { format } from "date-fns";

const actualDay = format(new Date(), "yyyy-MM-dd");

function Footer() {
  return (
    <footer className={styles.footer}>
      Calidad App
      <span>@{actualDay}</span>
    </footer>
  );
}

export default Footer;
