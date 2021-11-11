import { FunctionComponent } from "react";
import styles from "../../styles/Footer.module.css";

const Footer: FunctionComponent = () => {
  return (
    <footer className={styles.footer}>
      <div>BRID Systems Company Limited</div>
      <div>Email: sales@bridsystems.com</div>
      <div>Tel: +66 95 294 5693, +66 02 271 4362-3</div>
      <div>
        Address: 40/30 Soi Intamara 23, Sudhisarn Road., Samsennai, Phayathai,
        Bangkok Thailand 10400
      </div>
    </footer>
  );
};

export default Footer;
