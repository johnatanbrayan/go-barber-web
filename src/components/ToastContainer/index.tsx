import React from 'react';
import { FiAlertCircle, FiXCircle } from 'react-icons/fi';
import { Container, Toast } from './style';

const ToastContainer: React.FC = () => {
  return (
    <Container>
      <Toast type="info" hasDescription>
        <FiAlertCircle size={20} />
        <div>
          <strong>Toast for Informations</strong>
          <p>This ballon is to inform you</p>
        </div>

        <button type="button">
          <FiXCircle size={16} />
        </button>
      </Toast>

      <Toast type="success" hasDescription={false}>
        <FiAlertCircle size={20} />
        <div>
          <strong>Success !!!</strong>
        </div>

        <button type="button">
          <FiXCircle size={16} />
        </button>
      </Toast>

      <Toast type="error" hasDescription>
        <FiAlertCircle size={20} />
        <div>
          <strong>An unexpected error has occurred</strong>
          <p>Login has the wrong data</p>
        </div>

        <button type="button">
          <FiXCircle size={16} />
        </button>
      </Toast>
    </Container>
  );
};

export default ToastContainer;
