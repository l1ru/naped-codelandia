import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  h1 {
    font-size: 24px;
    font-weight: 400;
    font-family: var(--lexend);
    color: #8257E6;
    
    margin-bottom: 16px;
  }
  p {
    text-align: center;
    font-family: var(--inter);
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    
    color: #C4C4C4;
    width: 500px;
    
    margin-bottom: 40px;
  }
`