import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Open+Sans:400,600');
    @import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro&display=swap');
    body {
        margin: 0;
        padding: 0;
        font-family: 'Open Sans', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background: #0F3A84;
    }
    html {
        font-size: 14px;
    }
`

export default GlobalStyle