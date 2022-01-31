import { styled } from '../../styles/styled';
import { Colors } from '../../styles/Colors';

export const Container = styled('div', {
  maxWidth: '70rem',
  margin: '0 auto',
  padding: '5rem 1rem 2rem',

  '> h1': {
    fontSize: '3.3rem',
  }
});

export const Collections = styled('main', {
  width: '100%',
  marginTop: '2rem',

  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: '2rem',
});

export const Collection = styled('div', {
  width: '100%',
  height: '11rem',
  padding: '2rem 2.4rem',

  borderRadius: '1.5rem',
  background: 'var(--shape)',

  display: 'flex',
  alignItems: 'center',
  gap: '2rem',

  transition: '0.2s ease-in-out',
  cursor: 'pointer',

  'strong': {
    fontSize: '1.9rem',
  },

  'p': {
    fontSize: '1.5rem',
    opacity: 0.5,
  },

  '&:hover': {
    background: 'var(--shape-hover)',
  }
});

export const Tag = styled('div', {
  width: '6rem',
  height: '6rem',

  borderRadius: '1.5rem',
  background: '#c9c9c9',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  variants: {
    variant: {
      purple: {
        background: Colors.purple,
      },
      pink: {
        background: Colors.pink,
      },
      yellow: {
        background: Colors.yellow,
      },
      orange: {
        background: Colors.orange,
      },
      red: {
        background: Colors.red,
      },
      blue: {
        background: Colors.blue,
      },
      green: {
        background: Colors.green,
      },
    }
  }
});

export const ButtonAddNewCollection = styled('button', {
  width: '100%',
  height: '5rem',

  border: '3px solid var(--shape)',
  borderRadius: '1.3rem',
  background: 'none',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '2rem',

  transition: '0.2s ease-in-out',

  fontSize: '1.6rem',
  color: 'var(--white)',

  '&:hover': {
    background: 'var(--shape)',
  }
});

export const ContentModal = styled('form', {
  width: '100%',
  mt: '2rem',

  display: 'flex',
  flexDirection: 'column',
  gap: '2rem',

  '> span': {
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',    

    '> p': {
      fontSize: '1.6rem',
    }
  }
});

export const Buttons = styled('div', {
  margin: ' 3rem 0 0 auto',
  
  display: 'flex',
  alignItems: 'center',
  gap: '1rem',
});