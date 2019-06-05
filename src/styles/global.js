import { createGlobalStyle } from 'styled-components'
import { colors } from './constants'

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        font-family: 'Rubik', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background: ${colors.blue};
    }
    html {
        font-size: 14px;
    }
`

export default GlobalStyle