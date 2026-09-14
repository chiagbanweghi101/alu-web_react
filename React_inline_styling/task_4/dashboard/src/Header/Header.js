import React from 'react';
import { StyleSheet, css } from 'aphrodite';
import logo from '../assets/holberton-logo.jpg';

function Header() {
  return (
    <div className={css(styles.header)}>
      <img src={logo} alt="Holberton logo" className={css(styles.logo)} />
      <h1 className={css(styles.title)}>School dashboard</h1>
    </div>
  );
}

const styles = StyleSheet.create({
  header: {
    display: 'flex',
    alignItems: 'center',
    color: '#e11d3f',
    borderBottom: '3px solid #e11d3f',
    padding: '0.5rem 1rem',
  },
  logo: {
    width: '200px',
    height: '200px',
  },
  title: {
    marginLeft: '1rem',
    fontSize: '2rem',
  },
});

export default Header;
