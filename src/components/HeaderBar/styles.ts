import styled from "styled-components";

export const HeaderBarContainer = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 25px 60px;
  border-bottom: 1px solid rgb(201, 201, 201);
  background-color: ${({ theme }) => theme.colors.background};

  @media (max-width: 960px) {
    padding: 20px 30px;
  }
`;

export const HeaderList = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
  gap: 20px;
  font-size: 18px;
  font-family: 'Almarena', sans-serif;
  align-items: center;

  &.desktop-only {
    @media (max-width: 960px) {
      display: none;
    }
  }
`;

export const HeaderItem = styled.li`
  cursor: pointer;
  transition: color 0.3s;
  color: ${({ theme }) => theme.colors.text};
  font-family: 'Almarena', sans-serif;
  font-weight: light;

  &:hover {
    color: ${({ theme }) => theme.colors.primaryPurple};
    font-weight: normal;
  }
`;

export const MidContainer = styled.div`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const LogoImage = styled.img`
  width: 45px;
  height: 45px;
  margin-right: 10px;
  cursor: pointer;
  transition: transform 0.5s;

  &:hover {
    transform: scale(1.05);
  }
`;

export const Logotype = styled.span`
  font-size: 36px;
  font-family: 'Almarena', sans-serif;
  color: ${({ theme }) => theme.colors.textLight};
  font-weight: bold;

  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

export const StartButton = styled.button`
  color: ${({ theme }) => theme.colors.text};
  border: 2px solid ${({ theme }) => theme.colors.primaryGreen};
  background-color: transparent;
  font-family: 'Almarena', sans-serif;
  font-weight: bold;
  border-radius: 25px;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryGreen};
    color: #fff;
    font-weight: bold;
  }
`;

export const HamburgerMenu = styled.div`
  display: none;
  font-size: 28px;
  cursor: pointer;

  @media (max-width: 960px) {
    display: block;
  }
`;

export const MobileMenu = styled.div`
  position: absolute;
  list-style: none;

  top: 100%;
  left: 0;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.background};
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px 0;
  gap: 10px;
  border-top: 1px solid rgb(201, 201, 201);

  ${HeaderItem} {
    font-size: 18px;
  }
`;
