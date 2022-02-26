import styled from "styled-components";

export const Container = styled.div`
  margin-top: 6.25em;
  h1 {
    font-family: var(--lexend);
    color: var(--white);
    font-weight: 400;
    font-size: 1.5em;
  }
  .divider {
    margin-top: 13px;
    border-bottom: 3px solid var(--purple-light);
    width: 14em;
  }
`

export const Images = styled.div`
  margin-top: 39px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-content: flex-start;
  height: 700px;
  .mostrecent__news {
    :nth-child(n+4) {
      margin-top: 42px;
    }
  }
`