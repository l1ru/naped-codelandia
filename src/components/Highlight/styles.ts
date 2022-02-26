import styled from "styled-components";

export const Container = styled.div`
  margin-top: 80px;
  display: flex;
  .principal {
    line-height: 34px;
  }
  .__secondary {
    margin-left: 20px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .__banner__title {
      margin: 10px;
    }
    .__banner__description {
      margin: 10px 15px;
    }
  }
`