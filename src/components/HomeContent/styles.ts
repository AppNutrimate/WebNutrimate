import styled from "styled-components";
import { motion } from "framer-motion";
import Stretch from '../../assets/images/StretchWoman.webp';
import Teens from '../../assets/images/TeenPlaying.jpg';

export const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  flex-direction: column;
  overflow: hidden;
`;

export const TitleContainer = styled.div`
    flex-direction: column;
  padding: 0 20px;
  max-width: 800px;
  width: 100%;
  z-index: 10;
`;

export const MainTitle = styled.h1`
  font-size: 90px;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.text};
  text-align: center;
  font-family: 'Almarena', sans-serif;
  line-height: 1.1;
  -webkit-text-stroke: 1px ${({ theme }) => theme.colors.background};
;`

export const MainSubtitle = styled.h2`
  font-size: 20px;
  font-weight: normal;
  color: ${({ theme }) => theme.colors.lightGray};
  text-align: center;
  font-family: 'Almarena', sans-serif;
  margin-bottom: 10px;
`;

export const ScrollContainer = styled(motion.div)`
position: absolute;
  bottom: 7%;
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
  color: #555;
  font-size: 14px;
  opacity: 0.8;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 1;
  }
`;

export const ScrollText = styled.p`
  font-size: 18px;
  font-weight: normal;
  color: ${({ theme }) => theme.colors.text};
  text-align: center;
  font-family: 'Almarena', sans-serif;
`;

export const ArrowContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 5px;
  background-color: ${({ theme }) => theme.colors.primaryPurple};
  border-radius: 50%;
  width: 17px;
  height: 17px;
  color: white;
  font-size: 12px;
  animation: bounce 1.5s infinite;
  
  @keyframes bounce {
    0%, 100% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(4px);
    }
  }
`;

export const IntroTextContainer = styled(motion.div)`
  position: absolute;
  bottom: 15%;
  left: 5%;
  display: flex;
  flex-direction: column;
  gap: 5px;
  z-index: 10;
`;

export const IntroText = styled.p`
  font-size: 16px;
  font-weight: normal;
  color: ${({ theme }) => theme.colors.text};
  text-align: left;
  font-family: 'Almarena', sans-serif;
  width: 100%;
  margin: 0 20px;
  line-height: 1.2;
  opacity: 0.6;
`;

export const TagBoxContainer = styled.div`
  position: absolute;
  top: 20%;
  right: 5%;
  display: flex;
  flex-direction: column;
  gap: 5px;
  z-index: 10;
`;

export const TagContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.primaryPurple};
  border-radius: 20px;
  padding: 5px 10px;
  color: white;
  font-size: 14px;
  font-family: 'Almarena', sans-serif;
  font-weight: bold;
  text-align: center;
`;

export const GreenFormContainer = styled.div`
  position: absolute;
  top: 60%;
  right: 5%;
  transform: translateY(-50%) rotate(10deg);
  width: 40vh;
  height: 47vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primaryGreen};
  border-radius: 25% 25% 100% 100%;
  z-index: 0;
  /* border: 15px solid ${({ theme }) => theme.colors.primaryGreen}; */
  background-image: url(${Stretch});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  
  &:hover {
    transform: translateY(-50%) rotate(-5deg);
    transition: transform 0.5s ease;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  }
`;

export const PurpleFormContainer = styled.div`
  position: absolute;
  top: 40%;
  left: 7%;
  transform: translateY(-50%) rotate(-10deg);
  width: 37vh;
  height: 43vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.primaryPurple};
  border-radius: 15% 15% 100% 15%;
  z-index: 0;
  background-image: url(${Teens});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  
  &:hover {
    transform: translateY(-50%) rotate(5deg);
    transition: transform 0.5s ease;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  }
`;

