import styled from 'styled-components'
import { colors, sizes } from './constants'

const header = styled.header`
    height: 8vh;
    width: 100vw;
    display: flex;
    flex-direction: row;
    align-items: center;
    position: relative;
    justify-content: space-between;
    padding: 0 5vw;
    box-sizing: border-box;
    font-family: 'Source Sans Pro', sans-serif;
`
const nav = styled.nav`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 30%;
    a {
        font-size: ${sizes.header};
    }
`

export {
    header,
    nav
}