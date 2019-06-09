import styled from 'styled-components'
import { colors, sizes, breakpoints } from './constants'

const header = styled.header`
    height: 10vh;
    width: 100vw;
    display: flex;
    flex-direction: row;
    align-items: center;
    position: absolute;
    z-index: 10;
    justify-content: space-between;
    padding: 0 5vw;
    box-sizing: border-box;
`
const nav = styled.nav`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 20%;
    .menu-toggle {
        cursor: pointer;
        display: none;
        position: fixed;
        right: 10px;
        top: calc(100vh + 30px);
        width: 30px;
        height: 3px;
        background: white;
        border-radius: 15px;
        transition: all 0.3s ease;
        &::after {
            content: "";
            position: absolute;
            right: 0;
            top: 8px;
            width: 30px;
            height: 3px;
            background: white;
            border-radius: 15px;
            transform-origin: right;
            transform: scaleX(0.8);
        }
        &::before {
            content: "";
            position: absolute;
            right: 0;
            bottom: 8px;
            width: 30px;
            height: 3px;
            background: white;
            border-radius: 15px;
            transform-origin: right;
            transform: scaleX(0.8);
        }
    }
    @media (max-width: ${breakpoints.small}) {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        width: 100%;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        transform: translateY(-100%);
        transition: transform 0.3s ease;
        will-change: transform;
        background: ${colors.darkBlue};
        a {
            padding-bottom: 10px;
        }
        &.toggle {
            transform: translateY(0);
        }
        .menu-toggle {
            display: block;
            &.toggle {
                top: 30px;
                transform: rotate(45deg);
                &::after {
                    transform: scaleX(1) rotate(90deg) translate(25%,490%);
                }
                &::before {
                    opacity: 0;
                }
            }
        }
    }
`

const main = styled.main`
    width: 100%;
    height: 100vh;
    padding: 20vh 0 4vh 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
    @media (max-width: ${breakpoints.medium}) {
        padding: 20vh 0 10vh 0;
    }
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
    @media (max-width: ${breakpoints.medium}) {
        width: 70%;
    }
    @media (max-width: ${breakpoints.small}) {
        width: 90%;
    }
`

const contact = styled.main`
    width: 100%;
    height: 100vh;
    padding: 15vh 5vw 10vh 5vw;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    box-sizing: border-box;
    @media (max-width: ${breakpoints.medium}) {
        flex-direction: column;
        justify-content: flex-start;
    }
`

const work = styled.div`
    width: 100%;
    height: 100vh;
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
    & > .col:nth-of-type(1) {
        width: 50%;
        margin-top: 20px;
        .row {
            margin: 20px 0;
            .paragraphe {
                width: 70%;
                text-align: left;
            }
        }
        @media (max-width: ${breakpoints.medium}) {
            width: 100%;
        }
    }
    .row-wrap {
        width: 100%;
        flex-wrap: wrap;
        justify-content: space-between;
    }
    .col {
        width: 100%;
        margin-top: 20px;
        text-align: right;
        margin-bottom: 10vh;
        p {
            margin-top: 10px;
            font-size: ${sizes.description};
            line-height: 30px;
        }
        .img
        {
            width: 100%;
            img {
                width: 100%;
            }
        }
    }
    .col-sm {
        width: 30%;
        margin-top: 20px;
        text-align: right;
        margin-bottom: 10vh;
        p {
            margin-top: 10px;
            font-size: ${sizes.description};
            line-height: 30px;
        }
        .img
        {
            width: 100%;
            img {
                width: 100%;
            }
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
    width: 80%;
    margin-top: 5vh;
    display: flex;
    flex-direction: column;
    align-self: center;
    align-items: flex-start;
    justify-content: space-between;
    box-sizing: border-box;
    position: relative;
    transition: opacity 0.3s ease-in-out;
    will-change: opacity;
    .img {
        width: 100%;
        position: relative;
        img {
            width: 100%;
        }
    }
    .img-after {
        width: 80%;
        position: absolute;
        top: 5%;
        left: 105%;
        cursor: pointer;
        img {
            width: 100%;
        }
    }
    &.disappear {
        opacity: 0;
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
    height: 20vh;
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
    @media (max-width: ${breakpoints.small}) {
        width: 20%;
    }
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
    @media (max-width: ${breakpoints.medium}) {
        width: 80%;
        height: 100%;
        align-self: center;
        margin-top: 5vh;
    }
    @media (max-width: ${breakpoints.small}) {
        width: 90%;
        padding: 30px;
    }
`

const label = styled.label`
    cursor: text;
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