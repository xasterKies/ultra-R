import styled, {createGlobalStyle} from 'styled-components'

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
padding-right: auto;
padding-left: 50px;

@media screen and (max-width: 991px) {
    padding-right: 30px;
    padding-left: 30px;
}
`


export default GlobalStyle