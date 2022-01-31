import { forwardRef, HTMLAttributes, useState, useCallback, useImperativeHandle } from 'react';
import { FiX } from 'react-icons/fi';

import { Container, Overlay, Content, ButtonCloseModal } from './styles';

export interface MainModalHandles {
  openModal: () => void;
  closeModal: () => void;
} 

interface MainModalProps extends HTMLAttributes<HTMLDivElement> {
  titleModal?: string;
}

function MainModalBase({ titleModal, children }: MainModalProps, ref) {
  const [active, setActive] = useState(false);
  
  const openModal = useCallback(() => {
    setActive(true);
  }, []);
  
  const closeModal = useCallback(() => {
    setActive(false);
  }, []);
  
  useImperativeHandle(ref, () => {
    return {
      openModal,
      closeModal
    }
  });

  if (!active) return null;

  return (
    <Container ref={ref}>
      <Overlay onClick={closeModal} />
      <Content>
        <ButtonCloseModal type='button' onClick={closeModal}>
          <FiX size={23} color='var(--white)' />
        </ButtonCloseModal>

        {!!titleModal && <h1>{titleModal}</h1>}

        {children}
      </Content>
    </Container>
  );
}

export const MainModal = forwardRef<MainModalHandles, MainModalProps>(MainModalBase);