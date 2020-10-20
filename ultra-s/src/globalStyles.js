import styled, {createGlobalStyle} from 'styled-component'

const GlobalStyle = createGlobalStyle`
*{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Source Sans Pro', sans-serif;
}
`;

export const Container = styled.div`
z-index: 1;
width: 100%;
max-width: 130px;
margin-right: auto;
margin-left: auto;
`


export default GlobalStyle