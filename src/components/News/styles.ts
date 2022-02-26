import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  margin-bottom: 35px;
  &:last-child {
    margin: 0;
  }
  .__banner__title {
    margin: 10px;
  }
  .__description {
    margin-left: 18px;
    display: flex;
    flex-direction: column;
    h3 {
      width: 394px;
      height: 40px;
      font-family: var(--lexend);
      font-weight: 400;
      font-size: 13px;
      line-height: 20px;
      color: var(--white);

      margin-bottom: 10px;
    }
    p {
      width: 330px;
      height: 32px;
      
      color: #C4C4C4;
      font-family: var(--inter);
      font-weight: 400;
      font-size: 11px;
      line-height: 16px;
      
      margin-bottom: 6px;
    }
    span {
      color: #C4C4C4;
      font-family: var(--inter);
      font-weight: 600;
      font-size: 10px;
      line-height: 20px;
    }
    button {
      width: 100px;
      height: 25px;
      background: var(--purple-light);
      border-radius: 3px;
      border: none;
      outline: none;
      
      cursor: pointer;
      
      color: var(--white);

      font-family: var(--inter);
      font-weight: 600;
      font-size: 11px;
      line-height: 20px;
      
      margin-top: 12px;
    }
  }
`