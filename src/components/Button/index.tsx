import React, { ButtonHTMLAttributes, forwardRef, HTMLAttributes, ReactElement } from 'react'; 

import { Container } from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  textButton?: string;
  variant?: 'primary' | 'secondary' | 'delete' | 'iconPrimary' | 'iconSecondary';
  size?: 'sm' | 'md' | 'lg' | 'icon';
  icon?: ReactElement;
  hasIcon?: boolean;
}

function ButtonBase({ textButton, size, variant = 'primary', hasIcon = false, icon, ...rest }: ButtonProps) {
  return (
    <Container
      size={size}
      variant={variant}
      {...rest}
    >
      {!!textButton && textButton}
      { hasIcon && (
        <React.Fragment>
          {!!icon && icon}
        </React.Fragment>
      ) }
    </Container>
  );
}

export const Button = forwardRef(ButtonBase);