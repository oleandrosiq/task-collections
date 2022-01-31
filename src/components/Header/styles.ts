import { styled } from '../../styles/styled';

export const Container = styled('header', {
  width: '100%',
  height: '6rem',

  padding: '1rem 2rem',
  background: 'var(--shape)',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
});

export const Nav = styled('nav', {
  '> ul': {
    listStyle: 'none',

    display: 'flex',
    alignItems: 'center',
    gap: '2.5rem'
  }
});

export const Li = styled('li', {
  lineHeight: '6rem',

  position: 'relative',
  cursor: 'pointer',

  transition: 'opacity 0.2s ease-in-out',
  opacity: 0.6,

  '&::after': {
    content: '',
    width: '100%',
    height: '2px',
    background: 'var(--white)',

    position: 'absolute',
    bottom: '0',
  },

  '&:hover': {
    opacity: 0.6,
  },

  'span': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.8rem',

    fontSize: '1.6rem',
    fontWeight: '400',
  },

  variants: {
    variant: {
      active: {
        opacity: 1,
      }
    }
  }
});

export const Image = styled('img', {
  width: '4.5rem',
  height: '4.5rem',
  borderRadius: '50%',
});