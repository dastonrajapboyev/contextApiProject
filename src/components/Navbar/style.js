import styled from "styled-components";

const Container = styled.div`
  padding: 20px 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: #181818;
  color: #fff;
  border-bottom: 2px solid mediumvioletred;
  @media (max-width: 768px) {
    top: 0;
    left: 0;
    width: 100%;
    flex-direction: column;
    position: sticky;
  }
`;

Container.Logo = styled.h1`
  cursor: pointer;
`;
Container.Nav = styled.nav`
  display: flex;
  gap: 20px;
  @media (max-width: 768px) {
    flex-direction: column;
    flex-wrap: wrap;
    gap: 5px;
    margin-top: 10px;
  }
`;
Container.NavItem = styled.p`
  font-size: 20px;
  cursor: pointer;
`;

export { Container };
