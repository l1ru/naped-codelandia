import styled from "styled-components";

export const Container = styled.div`
  .__title {
    margin-top: 89px;
    h1 {
      font-family: var(--lexend);
      font-weight: 400;
      font-size: 36px;
      line-height: 55px;
      color: #FFFFFF;
      margin-bottom: 12px;
    }
    span {
      font-family: var(--inter);
      font-weight: 500;
      font-size: 24px;
      color: #C4C4C4;
      line-height: 55px;
    }
    p {
      font-family: var(--inter);
      font-weight: 400;
      font-size: 18px;
      color: #C4C4C4;
    }
  }
  .post__banner {
    width: 100%;
    margin-top: 12px;
    &.second {
      margin-top: 43px;
    }
  }
  .p-1 {
    font-family: var(--inter);
    font-weight: 400;
    font-size: 24px;
    
    margin-top: 43px;
    color: #C4C4C4;
    line-height: 40px;
  }
`