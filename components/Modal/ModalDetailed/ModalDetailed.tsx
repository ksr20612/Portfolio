'use client';

import IconButton from 'components/Button/IconButton/IconButton';
import React, { ReactElement, useCallback, useState } from 'react';
import DescriptionOutlinedIcon from '@mui/icons-material/DescriptionOutlined';
import Modal from 'components/Modal/Modal';
import { PropsWithChildren } from 'types/PropsWithChildren';

interface ModalDetailedProps {
  modalTitle: string;
}

function ModalDetailed({
  modalTitle,
  children,
}: PropsWithChildren<ModalDetailedProps>): ReactElement {
  const [isOpened, setIsOpened] = useState<boolean>(false);
  const handleOpen = useCallback(() => {
    setIsOpened(true);
  }, []);
  const handleClose = useCallback(() => {
    setIsOpened(false);
  }, []);
  return (
    <>
      <IconButton onClick={handleOpen}>
        <DescriptionOutlinedIcon fontSize="medium" />
      </IconButton>
      <Modal title={modalTitle} open={isOpened} handleClose={handleClose}>
        {children}
      </Modal>
    </>
  );
}

export default ModalDetailed;
