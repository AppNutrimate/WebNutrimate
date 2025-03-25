import styled, { keyframes } from "styled-components";

const float = keyframes`
  0% {
    transform: translateY(0) rotate(0deg);
  }
  25% {
    transform: translateY(-15px) rotate(2deg);
  }
  50% {
    transform: translateY(0) rotate(-2deg);
  }
  75% {
    transform: translateY(15px) rotate(2deg);
  }
  100% {
    transform: translateY(0) rotate(0deg);
  }
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  color: #333;
text-align: center;
`;

export const MainImage = styled.img`
  width: 100%;
  max-width: 350px;
    animation: ${float} 3s ease-in-out infinite;
`;

export const Signature = styled.h2`
  font-size: 2.3rem;
  color: ${({ theme }) => theme.colors.primary};
  align-items: center;
  justify-content: center;
  margin-top: 1rem;
`;