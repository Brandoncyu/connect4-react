import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'

const StartModal = ({ gameStart, toggleModal }) => {
    return (<Modal isOpen={gameStart} toggle={() => toggleModal(false)} centered={true}>
        <ModalHeader toggle={() => toggleModal(false)}>Connect Four!</ModalHeader>
        <ModalBody>
            How Many Players Want to Connect Four?
          </ModalBody>
        <ModalFooter>
            <Button color="primary" size="md" onClick={() => toggleModal(true)}>One Player</Button>{' '}
            <Button color="success" size="md" onClick={() => toggleModal(false)}>Two Players</Button>
        </ModalFooter>
    </Modal>)
}

export default StartModal;