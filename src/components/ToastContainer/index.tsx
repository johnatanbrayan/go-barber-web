import React from 'react';
import { FiAlertCircle, FiXCircle } from 'react-icons/fi';
import { ToastMessage, useToast } from '../../hooks/toast';
import { Container, Toast } from './style';

interface ToastContainerProps {
  messages: ToastMessage[];
}

const ToastContainer: React.FC<ToastContainerProps> = ({ messages }) => {
  const { removeToast } = useToast();
  return (
    <Container>
      {messages.map((message) => (
        <Toast
          key={message.id}
          type={message.type}
          hasDescription={!!message.description}
        >
          <FiAlertCircle size={20} />
          <div>
            <strong>{message.title}</strong>
            {message.description && <p>{message.description}</p>}
          </div>

          <button onClick={() => removeToast(message.id)} type="button">
            <FiXCircle size={16} />
          </button>
        </Toast>
      ))}
    </Container>
  );
};

export default ToastContainer;
