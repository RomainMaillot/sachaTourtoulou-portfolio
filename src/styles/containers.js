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
`

const main = styled.main`
    width: 100%;
    height: 100vh;
    padding: 20vh 0 2vh 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
`

const error = styled.main`
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    a {
        position: absolute;
        bottom: 10vh;
    }
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

const contact = styled.main`
    width: 100%;
    height: 100vh;
    padding: 15vh 5vw 10vh 5vw;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    box-sizing: border-box;
`

const work = styled.div`
    width: 100%;
    padding: 15vh 5vw 10vh 5vw;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    box-sizing: border-box;
`

const content = styled.main`
    width: 100%;
    padding: 10vh 5vw 10vh 5vw;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    box-sizing: border-box;
    .col:nth-of-type(1) {
        width: 50%;
        margin-top: 20px;
        .row {
            margin: 20px 0;
            .paragraphe {
                width: 70%;
                text-align: left;
            }
        }
        .img
        {
            width: 100%;
        }
    }
    .col {
        width: 100%;
        margin-top: 20px;
        text-align: right;
        margin-bottom: 10vh;
        p {
            margin-top: 10px;
            font-size: 1rem;
        }
    }
    .next {
        align-items: center;
        align-self: center;
        h2 {
            margin-bottom: 10px;
        }
        .paragraphe {
            font-weight: 400;
            margin-bottom: 20px;
        }
    }
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
    position: relative;
    .img {
        width: 100%;
        position: relative;
    }
    .img-after {
        width: 90%;
        position: absolute;
        top: 5%;
        left: 105%;
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

const form = styled.form`
    width: 40%;
    background: white;
    border-radius: 10px;
    padding: 40px 60px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

const label = styled.label`
    width: 100%;
    display: flex;
    flex-direction: column;
    background: ${colors.grey};
    border: solid ${colors.darkGrey} 2px;
    border-radius: 5px;
    padding: 7px 25px;
    box-sizing: border-box;
    position: relative;
    font-family: 'Rubik', sans-serif;
    &::after {
        content: "Invalid email address";
        position: absolute;
        font-size: ${sizes.footer};
        font-weight: 300;
        top: 0;
        left: 0;
        padding: 25px 30px;
        text-align: center;
        background: white;
        border-bottom: solid ${colors.darkRed} 5px;
        border-radius: 5px;
        transition: all 0.3s ease;
        opacity: 0;
        box-shadow: 0px 0px 11px rgba(0,0,0,0.19);
    }
    &.fill {
        border: solid ${colors.green} 2px;
    }
    &.invalid {
        border: solid ${colors.red} 2px;
    }
    &.invalid::after {
        opacity: 1;
        transform: translateY(-20%) translateX(-120%);
    }
    span {
        position: absolute;
        padding-bottom: 7px;
        opacity: 0;
        transform: translateX(10%);
        transition: all 2s ease;
    }
    span.fill {
        position: relative;
        opacity: 0.8;
        transform: translateX(0);
        display: block;
    }
`

const input = styled.input`
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    border: none;
    background: transparent;
    font-size: ${sizes.footer};
    outline: none;
`

const textarea = styled.textarea`
    width: 100%;
    height: 200px;
    box-sizing: border-box;
    border: none;
    background: transparent;
    font-size: ${sizes.footer};
    outline: none;
    resize: none;
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
    col,
    content,
    contact,
    form,
    label,
    input,
    textarea,
    error
}