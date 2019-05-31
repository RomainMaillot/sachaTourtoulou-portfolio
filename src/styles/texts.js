import styled from 'styled-components'
import { sizes, colors } from './constants'
import { Link } from "gatsby"

const title = styled.h1`
    font-size: ${props => props.header ? sizes.header : sizes.title};
    color: white;
    margin: 0;
    font-weight: bold;
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
    font-weight: ${props => props.bold ? 'bold' : 'normal'};
    color: white;
    margin: 0;
    opacity: 0.75;
`

const credits = styled.p`
    font-size: ${sizes.text};
    font-weight: 'bold';
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
    font-weight: bold;
    font-size: ${sizes.button}
`

export {
    title,
    text,
    textBig,
    footer,
    credits,
    button,
    description
}