import React, { useEffect, useState } from 'react';
import Adivinanza from './Adivinanzas';
import styles from '../Styles/AdivinanzasContainer.module.css';

const AdivinanzaContainer = () => {
  const [adivinanzas, setAdivinanzas] = useState([]);

  useEffect(() => {
    const fetchAdivinanzas = async () => {
      // Simulamos una llamada a una API
      const data = [
        { number: 1, question: 'Qué es, qué es, que cuanto más le quitas, más grande se vuelve?', answer: 'Un agujero' },
        { number: 2, question: 'Qué tiene manos pero no puede aplaudir?', answer: 'Un reloj' },
        { number: 3, question: 'Qué es, qué es, que tiene cabeza y no tiene cerebro, tiene cama y no duerme?', answer: 'La cama' },
        { number: 4, question: 'Cuanto más se seca, más moja. ¿Qué es?', answer: 'La toalla' },
        { number: 5, question: 'Qué tiene cabeza, pero no puede pensar?', answer: 'Un clavo' }
      ];
      setAdivinanzas(data);
    };

    fetchAdivinanzas();
  }, []);

  return (
    <div className={styles.container}>
      {adivinanzas.map(adivinanza => (
        <Adivinanza 
          key={adivinanza.number} 
          number={adivinanza.number} 
          question={adivinanza.question} 
          answer={adivinanza.answer} 
        />
      ))}
    </div>
  );
};

export default AdivinanzaContainer;
