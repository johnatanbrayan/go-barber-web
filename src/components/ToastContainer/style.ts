import styled, { css } from 'styled-components';

interface ToastProps {
  type?: 'info' | 'success' | 'error';
  hasDescription: boolean;
}

export const Container = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  padding: 30px;
  overflow: hidden;
`;

const toastTypeVariations = {
  info: css`
    background: #ebf8ff;
    color: #3172b7;
  `,
  success: css`
    background: #e6fffa;
    color: #2e656a;
  `,
  error: css`
    background: #fddede;
    color: #c53030;
  `,
};

export const Toast = styled.div<ToastProps>`
  width: 360px;
  position: relative;
  display: flex;
  padding: 16px 30px 16px 16px;
  background: #ebf8ff;
  color: #3172b7;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);
  border-radius: 10px;

  ${(props) => toastTypeVariations[props.type || 'info']}

  & + div {
    margin-top: 12px;
  }

  > svg {
    margin: 4px 12px 0 0;
  }

  div {
    flex: 1;

    p {
      font-size: 14px;
      margin-top: 4px;
      opacity: 0.8;
      line-height: 20px;
    }
  }

  button {
    position: absolute;
    top: 18px;
    right: 17px;
    background: transparent;
    opacity: 0.6;
    border: 0;
    color: inherit;
  }

  ${(props) =>
    !props.hasDescription &&
    css`
      align-items: center;

      svg {
        margin-top: 0;
      }
    `}
`;
