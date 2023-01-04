import React from 'react';
import { Button as MuiButton, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: theme.spacing(0.5),
  },
}));

export default function Button(props) {
  const { text, size, color, variant, disabled, onClick, ...other } = props;
  const classes = useStyles();

  return (
    <MuiButton
      style={{
        background: `linear-gradient(180deg, #2CCEB3 0%, #2CCE62 100%),
      linear-gradient(0deg, rgba(255, 255, 255, 0.04), rgba(255, 255, 255, 0.04))`,
        alignSelf: 'flex-end',
      }}
      variant={variant || 'contained'}
      size={size || 'large'}
      color={color || 'primary'}
      onClick={onClick}
      disabled={disabled || false}
      {...other}
      classes={{ root: classes.root, label: classes.label }}
    >
      {text}
    </MuiButton>
  );
}
