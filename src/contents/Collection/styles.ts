import { Colors } from '../../styles/Colors';
import { styled } from '../../styles/styled';

export const Container = styled('div', {
  maxWidth: '75rem',
  padding: '2rem 2rem 5rem',

  margin: '5.5rem auto 0',
});

export const Header = styled('header', {
  width: '100%',
  height: '6rem',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  '> span': {
    display: 'flex',
    alignItems: 'center',
    gap: '1.5rem',

    fontSize: '1.6rem',
  }
});

export const Tasks = styled('div', {
  width: '100%',
  marginTop: '3rem',

  '> h2': {
    fontSize: '1.8rem',
    fontWeight: '400',
    mb: '2rem',
  },
});

export const Task = styled('div', {
  width: '100%',
  height: '5rem',
  
  mt: '1rem',
  padding: '0.8rem 1.7rem',

  borderRadius: '1.2rem',
  background: 'var(--shape)',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  gap: '1.4rem',
  
  '> span': {
    display: 'flex',
    alignItems: 'center',
    gap: '1.5rem',

    '> p': {
      fontSize: '1.6rem',
    },
  },

  variants: {
    variant: {
      done: {
        '> span': {
          '> p': {
            position: 'relative',
  
            '&::before': {
              content: '',
              width: '100%',
              height: '0.2rem',
              background: 'var(--white)',
  
              position: 'absolute',
              top: '50%',
              left: '0',
              transform: 'translateY(-50%)',
            }
          }
        }
      }
    }
  }
});

export const ButtonCheck = styled('button', {
  width: '2.2rem',
  height: '2.2rem',

  borderRadius: '0.8rem',
  background: 'none',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  cursor: 'pointer',

  variants: {
    border: {
      purple: {
        border: `3px solid ${Colors.purple}`,
      },
      pink: {
        border: `3px solid ${Colors.pink}`,
      },
      yellow: {
        border: `3px solid ${Colors.yellow}`,
      },
      orange: {
        border: `3px solid ${Colors.orange}`,
      },
      red: {
        border: `3px solid ${Colors.red}`,
      },
      blue: {
        border: `3px solid ${Colors.blue}`,
      },
      green: {
        border: `3px solid ${Colors.green}`,
      },
    },
    done: {
      purple: {
        border: `3px solid ${Colors.purple}`,
        background: Colors.purple,
      },
      pink: {
        border: `3px solid ${Colors.pink}`,
        background: Colors.pink,
      },
      yellow: {
        border: `3px solid ${Colors.yellow}`,
        background: Colors.yellow,
      },
      orange: {
        border: `3px solid ${Colors.orange}`,
        background: Colors.orange,
      },
      red: {
        border: `3px solid ${Colors.red}`,
        background: Colors.red,
      },
      blue: {
        border: `3px solid ${Colors.blue}`,
        background: Colors.blue,
      },
      green: {
        border: `3px solid ${Colors.green}`,
        background: Colors.green,
      },
    }
  }
});

export const InputAddContainer = styled('form', {
  width: '100%',
  height: '5rem',

  mt: '1.5rem',
  padding: '0.8rem 1rem',

  borderRadius: '1.2rem',
  border: '3px solid var(--shape)',
  background: 'none',

  display: 'flex',
  alignItems: 'center',
  gap: '1.4rem',

  '> p': {
    fontSize: '1.6rem',
  },

  '> input': {
    width: '100%',
    height: '5rem',

    outline: 'none',
    border: 0,
    background: 'none',

    fontSize: '1.6rem',
    color: 'var(--white)',

    '&::-webkit-input-placeholder': {
      fontWeight: '500',
      color: '#898989',
    },
  },

  variants: {
    variant: {
      error: {
        border: '3px solid var(--red)',

        '> input': {
          width: '100%',
          height: '5rem',
      
          outline: 'none',
          border: 0,
          background: 'none',
      
          fontSize: '1.6rem',
          color: 'var(--red)',
      
          '&::-webkit-input-placeholder': {
            color: 'var(--red)',
          },
        },
      }
    }
  }
});

export const ContentModal = styled('form', {
  width: '100%',
  mt: '3rem',  

  display: 'flex',
  flexDirection: 'column',
  gap: '3.5rem',
});

export const ContentModalDelete = styled('div', {
  width: '100%',
  marginTop: '3.5rem',

  '> p': {
    fontSize: '1.7rem',
    marginBottom: '2.5rem',
    opacity: 0.75,
  }
});

export const ButtonsModal = styled('div', {
  width: 'max-content',
  ml: 'auto',

  display: 'flex',
  alignItems: 'center',
  gap: '2rem',
});