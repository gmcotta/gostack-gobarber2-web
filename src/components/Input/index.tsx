import React, { InputHTMLAttributes, useEffect, useRef } from 'react';
import { useField } from '@unform/core';
import { IconBaseProps } from 'react-icons';
import { Container } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  icon?: React.ComponentType<IconBaseProps>;
}

const Input: React.FC<InputProps> = ({ name, icon: Icon, ...otherProps }) => {
  const inputRef = useRef(null);
  const { fieldName, defaultValue, registerField } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [registerField, fieldName]);

  return (
    <Container>
      {Icon && <Icon size={20} />}

      <input defaultValue={defaultValue} ref={inputRef} {...otherProps} />
    </Container>
  );
};

export default Input;
