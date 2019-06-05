import styled from 'styled-components'
import { colors, sizes } from './constants'

const header = styled.header`
    height: 8vh;
    width: 100vw;
    display: flex;
    flex-direction: row;
    align-items: center;
    position: absolute;
    z-index: 10;
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

const main = styled.main`
    width: ${ props => props.about ? '40%' : '100%' };
    height: 100vh;
    padding: ${ props => props.about ? '15vh 5vw 10vh 5vw' : '20vh 0 2vh 0' };
    display: flex;
    flex-direction: column;
    align-items: ${ props => props.about ? 'flex-start' : 'center' };
    justify-content: ${ props => props.about ? 'space-around' : 'space-between' };
    box-sizing: border-box;
`

const about = styled.main`
    width: 40%;
    height: 100vh;
    padding: 15vh 5vw 10vh 5vw;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-around;
    box-sizing: border-box;
`

const work = styled.main`
    width: 100%;
    height: 100vh;
    padding: 15vh 5vw 10vh 5vw;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    box-sizing: border-box;
`

const project = styled.div`
    width: 90%;
    margin-top: 5vh;
    display: flex;
    flex-direction: column;
    align-self: center;
    align-items: flex-start;
    justify-content: space-between;
    box-sizing: border-box;
    .img {
        width: 100%;
    }
`

const row = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

const col = styled.div`
    display: flex;
    flex-direction: column;
`

const footer = styled.footer`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 5vh 0;
    background: ${colors.darkBlue};
    color: white;
    width: 100vw;
`

const logo = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 10%;
    margin-bottom: 10px;
`

const logos = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 30%;
    padding-top: 15px;
    &::before {
        content: "";
        position: absolute;
        top: 0;
        width: 30%;
        height: 1px;
        background: white;
    }
`

export {
    header,
    nav,
    footer,
    main,
    logo,
    logos,
    about,
    work,
    project,
    row,
    col
}