import styled from "styled-components";

export const Container = styled.div`
  .__notfound__page {
    display: flex;
    height: 80vh;
    align-items: center;
    justify-content: space-between;
    
    .__information {
      h1 {
        width: 457px;

        font-family: var(--lexend);
        font-size: 44px;
        color: #FEFBFB;
      }
      p {
        width: 495px;
        font-family: var(--inter);
        font-size: 20px;
        line-height: 34px;
        color: #C4C4C4;
        
        margin-bottom: 41px;
        margin-top: 17px;
      }
      button {
        padding: 10px 25px;
        background: #8257E6;
        border: 0;
        border-radius: 5px;
        
        font-family: var(--lexend);
        font-weight: 400;
        font-size: 18px;
        text-align: center;
        color: #FEFBFB;
        
        a {
          color: #FEFBFB;
          text-decoration: none;
          :hover, :focus, :active {
            text-decoration: none;
          }
        }
      }
    }
    .__hero {
      display: flex;
      flex-direction: column;
      align-items: center;
      font-family: var(--inter);
      font-size: 20px;
      color: #C4C4C4;
      text-align: center;
      width: 298px;
      img {
        margin-bottom: 44px;
      }
    }
  }
`