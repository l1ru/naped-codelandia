import styled from "styled-components";

export const Container = styled.div`
  margin-top: 50px;
  display: flex;
  .__scrollnews {
    overflow-y: auto;
    height: 850px;
    width: 760px;
    ::-webkit-scrollbar {
      width: 8px;
    }
    ::-webkit-scrollbar-track {
      background: #282830;
    }
    ::-webkit-scrollbar-thumb {
      background-color: var(--purple-light);
      
    }
  }
  
  .__highlights__day {
    margin-left: 20px;
    h2 {
      font-family: var(--lexend);
      font-weight: 400;
      font-size: 24px;
      color: var(--white);
      width: 250px;
      
      border-bottom: 2px solid var(--purple-light);
      padding-bottom: 13px;
    }
    div {
      margin-top: 14px;
    }
    .__banner__title {
      margin: 10px;
    }
    .__banner__description {
      margin: 10px 15px;
    }
  }
`