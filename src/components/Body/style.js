import styled from "styled-components";

const Container = styled.div`
  padding: 50px 0;
  background-color: #181818;
  color: #fff;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 30px;
  @media (max-width: 768px) {
    padding: 10px 0;
  }
`;

Container.Card = styled.div`
  margin-top: 20px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #181818;
  width: 300px;
`;
Container.CardImg = styled.img`
  width: 100%;
  height: 400px;
  object-fit: cover;
`;
Container.CardTitle = styled.h4`
  margin-top: 10px;
`;

Container.CardButton = styled.button`
  margin-top: 30px;
  background-color: red;
  padding: 10px 30px;
  color: #fff;
  font-size: 14px;
`;

export { Container };
