import { styled } from '../../styles/styled';

export const Container = styled('input', {
  width: '100%',
  height: '4.5rem',

  border: '3px solid var(--border)',
  borderRadius: '1.3rem',
  background: 'none',

  outline: 'none',
  pl: '1.5rem',

  fontSize: '1.6rem',
  color: 'var(--white)',

  '&:hover, &:focus': {
    borderColor: 'var(--blue)',
  },

  '&::-webkit-input-placeholder': {
    fontWeight: '500',
    color: '#898989',
  },

  variants: {
    variant: {
      error: {
        borderColor: 'var(--red)',

        '&::-webkit-input-placeholder': {
          color: 'var(--red)',
        },

        '&:hover': {
          borderColor: 'var(--red)',
        },

        '&:focus': {
          borderColor: 'var(--red)',
        }
      },
    }
  }
});

export const Wrapper = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  gap: '0.8rem',

  '> label': {
    fontSize: '1.7rem',
  }
});