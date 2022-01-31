import { styled } from '../../styles/styled';

export const Container = styled('div', {
  width: '100vw',
  height: '100vh',

  position: 'fixed',
});

export const Overlay = styled('div', {
  width: '100%',
  height: '100%',

  background: 'rgba(0, 0, 0, 0.5)',
  
  position: 'fixed',
  top: 0,
  left: 0,
});

export const Content = styled('div', {
  maxWidth: '44.8rem',
  width: '100%',
  padding: '2rem',

  borderRadius: '1.5rem',
  background: 'var(--shape)',

  position: 'fixed',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',

  '> h1': {
    marginTop: '1rem',
    fontSize: '2.2rem',
  }
});

export const ButtonCloseModal = styled('button', {
  border: 0,
  background: 'none',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  position: 'absolute',
  top: '1rem',
  right: '1rem',
});