import styled,{ keyframes } from 'styled-components'
import { sizes, colors, breakpoints } from './constants'
import { Link } from "gatsby"

const title = styled.h1`
    font-size: ${props => props.header ? sizes.header : sizes.title};
    color: white;
    margin: 0;
    font-weight: 500;
`

const contentTitle = styled.h1`
    font-size: ${props => props.header ? sizes.header : sizes.title};
    color: white;
    margin: 0;
    font-weight: 500;
`

const text = styled.p`
    font-size: ${sizes.text};
    color: white;
    margin: 0;
`

const textBig = styled.p`
    font-size: ${sizes.textBig};
    color: white;
    width: 50%;
    margin: 0;
    text-align: center;
    line-height: 40px;
    span {
        font-weight: bold;
    }
    @media (max-width: ${breakpoints.small}) {
        width: 80%;
        font-size: ${sizes.header}
    }
`

const footer = styled.p`
    font-size: ${sizes.footer};
    font-weight: 300;
    color: white;
    margin: 0;
    opacity: 0.75;
`

const credits = styled.p`
    font-weight: bold;
    color: white;
    margin-top: 2vh;
    opacity: 0.5;
    a {
        color: white;
        text-decoration: none;
    }
`

const description = styled.p`
    font-size: ${sizes.description};
    color: white;
    line-height: 30px;
    span {
        font-weight: bold;
    }
`

const button = styled(Link)`
    cursor: pointer;
    color: black;
    border-radius: 2px;
    padding: 10px 30px;
    vertical-align: center;
    background: ${colors.yellow};
    text-decoration: none;
    font-weight: normal;
    font-size: ${sizes.button};
    position: relative;
    transition: all 0.3s ease-in-out;
    &::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: ${colors.orange};
        border-radius: 2px;
        z-index: -10;
    }
    &:hover {
        background: transparent;
    }
`

const buttonProject = button.withComponent('div')
const resume = button.withComponent('a')

const submit = styled.button`
    cursor: pointer;
    color: black;
    width: 150px;
    border-radius: 2px;
    padding: 10px 30px;
    vertical-align: center;
    background: ${colors.yellow};
    text-decoration: none;
    font-weight: 700;
    font-size: ${sizes.button};
    outline: none;
    border: none;
`

const projectTitle = styled.h2`
    font-size: ${sizes.description};
    color: white;
    font-weight: normal;
`

const formTitle = styled.h2`
    font-size: ${sizes.textBig};
    color: black;
    margin: 0;
`

const theme = styled.p`
    font-size: ${sizes.description};
    font-weight: normal;
    color: white;
    opacity: 0.5;
    margin: 0;
`

const number = styled.p`
    font-size: ${sizes.tiny};
    font-weight: light;
    color: white;
    opacity: 0.5;
`

const inviteScroll = keyframes`
    0 {
        transform: translateY(0)
    }
    50% {
        transform: translateY(10px)
    }
    100% {
        transform: translateY(0)
    }
`

const more = styled(number)`
    position: absolute;
    bottom: 5vh;
    align-self: center;
    &::after {
        content: "";
        width: 1px;
        height: 3vh;
        position: absolute;
        top: 2vh;
        left: 50%;
        background: white;
        animation: ${inviteScroll} 2s ease-in-out infinite;
        animation-fill-mode: both;
    }
`

const info = styled.h4`
    font-size: ${sizes.footer};
    font-weight: 700;
    text-transform: uppercase;
    color: white;
    margin: 0;
`

const headerLink = styled(Link)`
    font-size: ${sizes.header};
    font-weight: ${props => props.active ? '700' : '400'};
`

export {
    title,
    text,
    textBig,
    footer,
    credits,
    button,
    description,
    projectTitle,
    contentTitle,
    theme,
    number,
    more,
    info,
    formTitle,
    submit,
    headerLink,
    buttonProject,
    resume
}