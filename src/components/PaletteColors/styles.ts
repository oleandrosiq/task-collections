import { styled } from '../../styles/styled';

export const Container = styled('div', {
  width: '100%',

  display: 'grid',
  gridTemplateColumns: 'repeat(6, 1fr)',
  alignItems: 'center',
  gap: '1rem',
  flexWrap: 'wrap'
});

export const ItemColor = styled('div', {
  width: '6rem',
  height: '5rem',

  borderRadius: '1.5rem',
  border: '3px solid var(--blue)',
  background: 'none',

  transition: '0.2s ease-in-out',

  cursor: 'pointer',

  variants: {
    border: {
      purple: {
        border: '3px solid var(--purple)',
      },
      pink: {
        border: '3px solid var(--pink)',
      },
      green: {
        border: '3px solid var(--green)',
      },
      yellow: {
        border: '3px solid var(--yellow)',
      },
      blue: {
        border: '3px solid var(--blue)',
      },
      orange: {
        border: '3px solid var(--orange)',
      },
      red: {
        border: '3px solid var(--red)',
      },
    },
    color: {
      purple: {
        background: 'var(--purple)',
      },
      pink: {
        background: 'var(--pink)',
      },
      green: {
        background: 'var(--green)',
      },
      yellow: {
        background: 'var(--yellow)',
      },
      blue: {
        background: 'var(--blue)',
      },
      orange: {
        background: 'var(--orange)',
      },
      red: {
        background: 'var(--red)',
      },
    }
  }
});