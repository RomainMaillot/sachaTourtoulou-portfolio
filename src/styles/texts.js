import styled,{ keyframes } from 'styled-components'
import { sizes, colors } from './constants'
import { Link } from "gatsby"

const title = styled.h1`
    font-size: ${props => props.header ? sizes.header : sizes.title};
    color: white;
    margin: 0;
    font-weight: 700;
`
const text = styled.p`
    font-size: ${sizes.text};
    color: white;
    margin: 0;
`

const textBig = styled.p`
    font-size: ${sizes.textBig};
    color: white;
    font-weight: bold;
    width: 50%;
    margin: 0;
    text-align: center;
`

const footer = styled.p`
    font-size: ${sizes.footer};
    font-weight: ${props => props.bold ? '700' : 'normal'};
    color: white;
    margin: 0;
    opacity: 0.75;
`

const credits = styled.p`
    font-size: ${sizes.text};
    font-weight: '700';
    color: white;
    margin-top: 2vh;
    opacity: 0.5;
    a {
        color: white;
    }
`

const description = styled.p`
    font-size: ${sizes.description};
    color: white;
`

const button = styled(Link)`
    color: black;
    border-radius: 2px;
    padding: 10px 30px;
    vertical-align: center;
    background: ${colors.yellow};
    text-decoration: none;
    font-weight: 700;
    font-size: ${sizes.button}
`

const projectTitle = styled.h2`
    font-size: ${sizes.description};
    color: white;
`

const theme = styled.p`
    font-size: ${sizes.description};
    font-weight: bold;
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

export {
    title,
    text,
    textBig,
    footer,
    credits,
    button,
    description,
    projectTitle,
    theme,
    number,
    more
}