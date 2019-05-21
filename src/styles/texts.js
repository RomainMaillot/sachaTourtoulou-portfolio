import styled from 'styled-components'
import { sizes, colors } from './constants'

const title = styled.h1`
    font-size: ${props => props.header ? sizes.header : sizes.title};
    color: white;
    margin: 0;
`
const text = styled.p`
    font-size: ${sizes.text};
    color: white;
    margin: 0;
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

export {
    title,
    text,
    footer,
    credits
}