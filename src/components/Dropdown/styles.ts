import { styled, keyframes } from '../../styles/styled';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

const slideUpAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateY(2px)' },
  '100%': { opacity: 1, transform: 'translateY(0)' },
});

const slideRightAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateX(-2px)' },
  '100%': { opacity: 1, transform: 'translateX(0)' },
});

const slideDownAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateY(-2px)' },
  '100%': { opacity: 1, transform: 'translateY(0)' },
});

const slideLeftAndFade = keyframes({
  '0%': { opacity: 0, transform: 'translateX(2px)' },
  '100%': { opacity: 1, transform: 'translateX(0)' },
});

export const DropdownRoot = styled(DropdownMenu.Root, {});

export const DropdownTrigger = styled(DropdownMenu.Trigger, {
  border: 0,
  background: 'none',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  transition: 'all 0.2s ease-in-out',
  cursor: 'pointer',

  '&[data-state="closed"]': {
    opacity: 0.5,
  },

  '&[data-state="open"]': {
    opacity: 1,
  },

  '&:hover': {
    opacity: 1,
  }
});

export const DropdownMenuContent = styled(DropdownMenu.Content, {
  minWidth: 220,
  padding: 5,

  borderRadius: 6,
  backgroundColor: 'var(--shape)',
  boxShadow:'0px 10px 38px -10px rgba(22, 23, 24, 0.35), 0px 10px 20px -15px rgba(22, 23, 24, 0.2)',
  
  '@media (prefers-reduced-motion: no-preference)': {
    animationDuration: '400ms',
    animationTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
    willChange: 'transform, opacity',
    '&[data-state="open"]': {
      '&[data-side="top"]': { animationName: slideDownAndFade },
      '&[data-side="right"]': { animationName: slideLeftAndFade },
      '&[data-side="bottom"]': { animationName: slideUpAndFade },
      '&[data-side="left"]': { animationName: slideRightAndFade },
    },
  },
});

export const DropdownMenuItem = styled(DropdownMenu.Item, {
  lineHeight: '3.5rem',
  paddingLeft: '0.7rem',

  '&:first-child': {
    borderTopLeftRadius: 6,
    borderTopRightRadius: 6,
  },

  '&:last-child': {
    borderBottomLeftRadius: 6,
    borderBottomRightRadius: 6,
  },

  fontSize: '1.5rem',
  color: 'var(--white)',

  cursor: 'pointer',

  '&:hover': {
    backgroundColor: 'var(--shape-hover)',
  },

  '& + div': {
    borderTop: '1px solid var(--background)',
  }
});