import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
    :root {
        --purple-light: #8257E6;
        --white: #FEFBFB;
        --white-200: #C4C4C4;
        --gray-200: #282830;
        --dark: #13131F;
        --inter: 'Inter', sans-serif;
        --lexend: 'Lexend Deca', sans-serif;;
    }
    body {
        background-color: var(--dark);
        max-width: 1080px;
        margin: 0 auto;
    }
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    ::-webkit-scrollbar {
      width: 8px;
    }
    ::-webkit-scrollbar-track {
      background: #282830;
    }
    ::-webkit-scrollbar-thumb {
      background-color: var(--purple-light);
    }
`

export default GlobalStyles