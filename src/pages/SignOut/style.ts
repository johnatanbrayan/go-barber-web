import styled from 'styled-components';
import { shade } from 'polished';
import signOut from '../../assets/sign-out-background.png';

export const Container = styled.div`
  display: flex;
  height: 100vh;
  align-items: stretch;
`;

export const Content = styled.div`
  display: flex;
  width: 100%;
  max-width: 800px;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  form {
    margin: 80px 0;
    width: 340px;
    text-align: center;

    h1 {
      margin-bottom: 24px;
    }
  }

  > a {
    color: #f4ede8;
    display: flex;
    align-items: center;
    margin-top: 24px;
    text-decoration: none;
    transition: color 0.2s;

    &:hover {
      color: ${shade(0.2, '#f4ede8')};
    }
  }

  svg {
    margin-right: 16px;
  }
`;

export const Background = styled.div`
  flex: 1;
  background: url(${signOut}) no-repeat center;
  background-size: cover;
`;
