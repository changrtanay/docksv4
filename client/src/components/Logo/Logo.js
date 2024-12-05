import styles from "./Logo.module.css";

function Logo() {
  return (
    <div className={styles.logo}>
      <div>
        <img src="/logo.png" alt="logo" />
      </div>
      <h2>Docks</h2>
    </div>
  );
}

export default Logo;
