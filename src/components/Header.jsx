import styles from "./header.module.css";

import igniteLogo from '../assets/IgniteLogo.svg'

export function Header() {
  return (
    <header className={styles.header}>
      <img src={igniteLogo} alt="Logotipo do Ignite" />
      {/* <strong>Ignite Feed</strong> */}
    </header>
  );
}
