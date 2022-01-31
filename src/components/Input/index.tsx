import { forwardRef, InputHTMLAttributes } from 'react';
import { FieldError } from 'react-hook-form';

import { Container, Wrapper } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: FieldError;
  label?: string;
};

function InputBase({ label, error, placeholder, ...rest }: InputProps, ref) {
  return (
    <Wrapper>
      {!!label && <label>{label}</label>}
      <Container
        ref={ref}
        variant={!!error ? 'error' : null}
        {...rest}
        placeholder={!!error ? error.message : placeholder}
      />
    </Wrapper>
  );
}

export const Input = forwardRef<HTMLInputElement, InputProps>(InputBase);