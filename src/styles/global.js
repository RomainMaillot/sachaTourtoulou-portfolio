import { createGlobalStyle } from 'styled-components'
import { colors } from './constants'

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Open+Sans:400,600');
    @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro&display=swap:400,600');
    body {
        margin: 0;
        padding: 0;
        font-family: 'Source Sans Pro', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background: ${colors.blue};
    }
    html {
        font-size: 14px;
    }
`

export default GlobalStyle