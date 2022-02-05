import { globalCss } from '@stitches/react';

const Styles = globalCss({
  '*': { 
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
    fontFamily: 'Open Sans, sans-serif',
  },

  ':root': {
    '--white': '#F5F5F5',
    '--gray': '#e2e8f0',
    '--gray-dark': '#898989',
    '--black': '#141416',

    '--purple': '#ae68e6',
    '--pink': '#fc76a1',
    '--yellow': '#dbbe56',
    '--orange': '#e39264',
    '--red': '#d25a61',
    '--red-dark': '#FF4040',
    '--blue': '#3b82f6',
    '--green': '#61faa9',

    '--border': '#31313c',
    '--border-light': '#3b3b46',
    '--background-button': '#3d3c50', 
    '--background-button-hover': '#47465a',
    '--background': '#181820',
    '--shape': 'rgb(29, 29, 39)',
    '--shape-dark': '#1e1e29',
    '--shape-hover': '#272732',
    '--dropdown': '#1e1e29',
    '--dropdown-hover': '#262630',
  },

  body: {
    background: 'var(--background)',
    color: 'var(--white)',
  },

  html: {
    fontSize: '62.5%',
  },

  button: {
    cursor: 'pointer',
  },

  a: {
    textDecoration: 'none',
  }
});

export const GlobalStyles = () => {
  return Styles();
}