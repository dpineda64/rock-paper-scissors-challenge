import React, { useState } from 'react';
import { RulesContainer, Modal } from './rules.styled';
import Button from '../button';
import Svg from '../svg';

export default function Rules() {
  const [modalOpen, setModalOpen] = useState(false);

  const _toggleModal = (e: React.MouseEvent) => {
    e.preventDefault();
    setModalOpen(!modalOpen);
  };

  return (
    <RulesContainer>
      <Button variant="bordered" small={true} onClick={_toggleModal}>
        rules
      </Button>
      {modalOpen && (
        <Modal>
          <h1> Rules </h1>
          <Svg icon={false} name="image-rules" />
          <a href="/" onClick={_toggleModal}>
            <Svg name="close" />
          </a>
        </Modal>
      )}
    </RulesContainer>
  );
}
