import styled from 'styled-components'
import { colors } from './constants'

const header = styled.header`
    background-color: ${colors.blue};
    height: 10%;
    width: 100vw;
    display: flex;
    flex-direction: row;
    align-items: center;
    position: relative;
    justify-content: space-between;
    padding: 0 5vw;
    box-sizing: border-box;
`
const nav = styled.nav`
    display: flex;
    flex-direction: row;
    width: 20%;
    justify-content: space-between;
`

export {
    header,
    nav
}