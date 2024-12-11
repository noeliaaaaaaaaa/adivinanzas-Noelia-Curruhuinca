import React from 'react';
import styles from '../Styles/Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <h1>Adivinanzas_Noelia_Curruhuinca</h1>
      <nav>
        <ul>
          <li><a href="/">Inicio</a></li>
          <li><a href="/about">Cristian aprobame porfi</a></li>
          <li><a href="/contact">Noelia Curruhuinca</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
