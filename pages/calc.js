import React from 'react';
import styles from '../styles/calc.module.css';

const Calc = () => {
  const [result, setResult] = React.useState('');
  const [value, setValue] = React.useState('');
  const inputRef = React.createRef();

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
      let val = 0;
      let sum = value?.split('+');
      let divide = value?.split('/');
      let subtraction = value?.split('-');
      let multiplication = value?.split('*');

      if (sum?.length > 0) {
        sum.map((e) => (val = val + parseFloat(e)));
      } else {
        val = 'E';
      }

      if (subtraction?.length > 0) {
        subtraction.map((e) => (val = val - parseFloat(e)));
      } else {
        val = 'E';
      }

      if (divide?.length > 0) {
      } else {
        val = 'E';
      }

      if (multiplication?.length > 0) {
      } else {
        val = 'E';
      }

      console.log(sum, val);

      setValue(val);
    }

    let value = resolve(e);
    console.log(value, 'value resolve');

    setValue((beforeValue) => `${beforeValue}${e}`);
    inputRef.current.focus();
  };

  const resolve = (props) => {
    let response = 0;
    fetch('api/hello').then((response) => console.log(response));

    return response;
  };

  const handleChangeInput = (e) => {
    /^\d+$/.test(e.target.value) ? setValue(e.target.value) : '';
    inputRef.current.focus();
  };

  return (
    <div className={styles.main}>
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
          <button className={styles.buttonNumber} onClick={() => setValue('')}>
            X
          </button>
        </div>
      </div>
    </div>
  );
};

export default Calc;
