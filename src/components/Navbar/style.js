import styled from "styled-components";

const Container = styled.div`
padding: 20px 0;
display: flex;
align-items: center;
justify-content: space-around;
background-color: #181818;
color: #fff;
border-bottom: 2px solid mediumvioletred;
`;

Container.Logo = styled.h1`
cursor: pointer;
`
Container.Nav = styled.nav`
display: flex;
gap: 20px;
`
Container.NavItem = styled.p`
font-size: 20px;
cursor: pointer;
`

export { Container };
