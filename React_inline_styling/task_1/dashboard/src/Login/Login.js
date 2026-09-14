import React from 'react';
import { StyleSheet, css } from 'aphrodite';

function Login() {
  return (
    <>
      <p>Login to access the full dashboard</p>
      <label htmlFor="email" className={css(styles.label)}>
        Email:
      </label>
      <input type="email" id="email" name="email" className={css(styles.input)} />
      <label htmlFor="password" className={css(styles.label)}>
        Password:
      </label>
      <input
        type="password"
        id="password"
        name="password"
        className={css(styles.input)}
      />
      <button type="button" className={css(styles.button)}>
        OK
      </button>
    </>
  );
}

const styles = StyleSheet.create({
  label: {
    marginRight: '0.5rem',
    marginLeft: '0.5rem',
  },
  input: {
    marginRight: '0.5rem',
  },
  button: {
    marginLeft: '0.5rem',
    cursor: 'pointer',
  },
});

export default Login;
