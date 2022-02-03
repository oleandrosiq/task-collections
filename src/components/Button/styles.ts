import { styled } from '../../styles/styled';

export const Container = styled('button', {
  padding: '1rem 2.4rem',

  border: 0,
  borderRadius: '0.5rem',
  background: '#c9c9c9',

  fontSize: '1.7rem',
  color: 'var(--black)',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  transition: 'all 0.2s ease-in-out',

  variants: {
    variant: {
      primary: {
        color: 'var(--white)',
        background: 'var(--background-button)',

        '&:hover': {
          background: 'var(--background-button-hover)',
        },
      },

      secondary: {
        color: 'var(--white)',
        background: 'none',

        '&:hover': {
          background: 'var(--background-button)',
        },
      },

      delete: {
        background: 'var(--red-dark)',
        color: 'var(--white)',
      },

      iconPrimary: {
        color: 'var(--white)',
        background: 'var(--shape)',

        '&:hover': {
          background: 'var(--shape-hover)',
        },
      },

      iconSecondary: {
        background: 'none',
        opacity: 0.7,

        '&:hover': {
          opacity: 1,
        },
      }
    },
    size: {
      sm: {
        maxWidth: '10rem',
      },
      md: {
        maxWidth: '14rem',
      },
      lg: {
        maxWidth: '18rem',
      },
      icon: {
        padding: '1rem',
        borderRadius: '1.5rem',
      }
    }
  }
});