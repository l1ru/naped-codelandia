import styled, {css} from "styled-components";

type ContentProps = {
    name: string
    bg: string
}

type SizeProps = {
    width: number
    height: number
}

export const Container = styled.div<SizeProps>`
  height: ${p => p.height}px;
  width: ${p => p.width}px;
`

export const Content = styled.div<ContentProps>`
  ${({bg}) => css`
    background: linear-gradient(360deg, #13131F 0%, rgba(19, 19, 31, 0) 100%), url(${bg});
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;

    font-family: var(--lexend);
    font-weight: 400;
    font-size: 14px;
    color: var(--white);
    transition: 300ms;
    cursor: pointer;
  `}
`

export const TextsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
`

type DescriptionSizeProps = {
    width: number
    height: number
    fontSize: number
}

export const Title = styled.div<DescriptionSizeProps>`
  font-size: ${p => p.fontSize}px;
  margin: 17px 30px;
  width: ${p => p.width}px;
  height: ${p => p.height}px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--purple-light);
  border-radius: 3px;
`


export const Description = styled.div<DescriptionSizeProps>`
  ${({width, height, fontSize}) => css`
    width: ${width}px;
    max-height: ${height}px;
    margin: 15px 30px;
    font-family: var(--lexend);
    font-size: ${fontSize}px;
  `}
`