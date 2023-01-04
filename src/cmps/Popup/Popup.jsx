import React from 'react';
import {
  Dialog,
  Button,
  DialogTitle,
  DialogContent,
  Typography,
} from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import CloseIcon from '@material-ui/icons/Close';
import { closePopup } from '../../store/system.actions.js';
export function Popup({ title, children }) {
  const dispatch = useDispatch();
  const isPopupOpen = useSelector((state) => state.systemReducer.isPopupOpen);
  return (
    <Dialog open={isPopupOpen} maxWidth='sm'>
      <DialogTitle>
        <div className='flex space-between'>
          <Typography variant='h6' component='div'>
            {title}
          </Typography>
          <Button
            onClick={() => {
              dispatch(closePopup());
            }}
          >
            <CloseIcon
              onClick={() => {
                dispatch(closePopup());
              }}
            />
          </Button>
        </div>
      </DialogTitle>
      <DialogContent dividers>{children}</DialogContent>
    </Dialog>
  );
}
