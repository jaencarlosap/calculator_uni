import React from 'react';
import * as ls from 'local-storage';
import { useRouter } from 'next/router';

import styles from '../../styles/calc.module.css';

const Calc = () => {
  const router = useRouter();
  const [value, setValue] = React.useState('');
  const inputRef = React.createRef();
  const history = ls.get('history_calc_uni') || [];

  const NumberKey = () => {
    let number = [
      [7, 8, 9, '+'],
      [4, 5, 6, '-'],
      [1, 2, 3, '*'],
      [0, '.', '=', '/'],
    ];
    return number.map((e) =>
      e.map((i) => (
        <button
          key={i}
          onClick={() => handleChange(i)}
          className={styles.buttonNumber}
        >
          {i}
        </button>
      ))
    );
  };

  const handleChange = (e) => {
    if (e === '=') {
      resolve({ value });
    } else {
      setValue((beforeValue) => `${beforeValue ? beforeValue : ''}${e}`);
    }

    inputRef.current?.focus();
  };

  const resolve = (props = {}) => {
    fetch('api/controller', {
      method: 'POST', // or 'PUT'
      body: JSON.stringify(props), // data can be `string` or {object}!
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .catch((error) => console.error('Error:', error))
      .then(async (response) => {
        let data = (await ls.get('history_calc_uni')) || [];

        ls.set('history_calc_uni', [...data, response]);

        setValue(response.result);
      });
  };

  const handleChangeInput = (e) => {
    /^\d+$/.test(e.target.value) ? setValue(e.target.value) : '';
    inputRef.current.focus();
  };

  const goBack = () => router.push('/');

  const cleanhistory = () => {
    ls.set('history_calc_uni', []);
    setValue('');
  };

  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <h3>Historial</h3>
        {history?.map((e) => (
          <p>{`Operación: ${e.operation} = ${e.result}`}</p>
        ))}
        <button className={styles.clean} onClick={cleanhistory}>
          Limpiar
        </button>
      </div>

      <div className={styles.container}>
        <input
          ref={inputRef}
          type='text'
          className={styles.result}
          value={value}
          onChange={handleChangeInput}
        />
        <div className={styles.table}>
          <NumberKey />
          <button className={styles.goBack} onClick={() => setValue(' ')}>
            Limpiar
          </button>
          <button className={styles.goBack} onClick={goBack}>
            Regresar
          </button>
        </div>
      </div>
    </div>
  );
};

export default Calc;
