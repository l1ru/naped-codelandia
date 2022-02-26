import styled from "styled-components";

export const Content = styled.header`
    padding-top: 31px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .title {
        font-family: var(--lexend);
        font-weight: 400;
        font-size: 24px;
        color: #8257E6;
    }
    .links {
        a {
            margin-left: 60px;
            font-family: var(--inter);
            font-weight: 500;
            font-size: 16px;
            font-style: normal;
            text-decoration: none;
            color: #C4C4C4;
            transition: color 300ms;
            :hover, :focus, :active {
                text-decoration: none;
                color: #8257E6;
            }
            :hover {
                color: var(--purple-light);
            }
        }
        button {
            padding: 5px 20px;
            margin-left: 84px;
            background: none;
            border: 1px solid var(--purple-light);
            border-radius: 30px;
            font-family: var(--lexend);
            font-size: 14px;
            font-weight: 400;
            color: var(--white);
            transition: 400ms;
            cursor: pointer;
            :hover {
                background-color: var(--purple-light);
                transform: scale(1.05);
            }
        }
    }
`