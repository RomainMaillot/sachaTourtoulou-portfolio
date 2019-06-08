import { createGlobalStyle } from 'styled-components'
import { colors, breakpoints } from './constants'

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
        overflow-x: hidden;
        @media (max-width: ${breakpoints.medium}) {
            font-size: 16px;
        }
        @media (max-width: ${breakpoints.small}) {
            font-size: 12px;
        }
    }
`

export default GlobalStyle