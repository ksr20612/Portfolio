'use client';

import * as React from 'react';
import Dialog, { DialogProps } from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import { EventFunc } from 'types/Event';
import DialogTitle from '@mui/material/DialogTitle';

interface ModalProps extends DialogProps {
  title: string;
  open: boolean;
  handleClose: EventFunc;
}

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function Modal({ title, open, handleClose, children, ...props }: ModalProps) {
  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      aria-labelledby="modal-title"
      style={{ minWidth: '80dvw' }}
      {...props}>
      <DialogTitle id="modal-title">{title}</DialogTitle>
      <DialogContent id="modal-content" className="min-h-[60dvh] box-border text-[1.1rem]">
        {children}
      </DialogContent>
    </Dialog>
  );
}

export default Modal;
