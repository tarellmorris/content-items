// @flow
import React from 'react';
import { Modal, ModalBody, SIZE, ROLE } from 'baseui/modal';
import { useStyletron } from 'baseui';

type ModalLayerProps = {
  children?: React$Node,
  isOpen: boolean | typeof undefined,
  setIsOpen: (a: boolean | typeof undefined) => void,
};

export const ModalLayer = (props: ModalLayerProps) => {
  const { children, isOpen, setIsOpen } = props;
  const [, theme] = useStyletron();
  const { sizing } = theme;

  const modalOverrides = {
    Dialog: {
      style: {
        width: '80vw',
        height: 'auto',
        padding: sizing.scale600,
      },
    },
  };
  return (
    <Modal
      onClose={() => setIsOpen(false)}
      closeable
      isOpen={isOpen}
      animate
      autoFocus
      size={SIZE.default}
      role={ROLE.dialog}
      overrides={modalOverrides}
    >
      <ModalBody>{children}</ModalBody>
    </Modal>
  );
};
