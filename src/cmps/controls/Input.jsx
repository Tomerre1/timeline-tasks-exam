import React from 'react';
import { TextField } from '@material-ui/core';

export default function Input(props) {
  const { name, label, value, onChange, placeholder, type, ...other } = props;
  return (
    <TextField
      style={{ width: '320px', height: '56px' }}
      label={label}
      name={name}
      value={value}
      placeholder={placeholder || ''}
      onChange={onChange}
      type={type}
      {...other}
    />
  );
}
