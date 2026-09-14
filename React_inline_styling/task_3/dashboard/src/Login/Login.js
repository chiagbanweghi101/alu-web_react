import React from 'react';
import { StyleSheet, css } from 'aphrodite';

function Login() {
  return (
    <div className={css(styles.login)}>
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
    </div>
  );
}

const styles = StyleSheet.create({
  login: {
    margin: '1rem 0',
  },
  label: {
    marginRight: '0.5rem',
    marginLeft: '0.5rem',
    '@media (max-width: 900px)': {
      display: 'block',
      marginLeft: 0,
      marginTop: '0.5rem',
    },
  },
  input: {
    marginRight: '0.5rem',
    '@media (max-width: 900px)': {
      display: 'block',
      width: '100%',
      marginRight: 0,
      marginBottom: '0.5rem',
      boxSizing: 'border-box',
    },
  },
  button: {
    marginLeft: '0.5rem',
    cursor: 'pointer',
    '@media (max-width: 900px)': {
      display: 'block',
      marginLeft: 0,
      marginTop: '0.5rem',
    },
  },
});

export default Login;
