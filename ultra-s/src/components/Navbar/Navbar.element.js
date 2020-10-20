import styled from 'styled-components'
import { FaMagento } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { Container } from '../../globalStyles'


export const Nav = styled.nav`

background: #101522;
height: 80px;
display: flex;
justify-content: center;
align-items: center;
font-size: 1.2rem;
position: sticky;
z-index: 999;
`

export const NavbarContainer = styled(Container)`

display: flex;
justify-content: space-between;
height: 80px;

${Container}
`

export const NavLogo = styled(Link)`

color: #fff;
justify-self: flex0start;
cursor: pointer;
text-decoration: none;
font-size: 2rem;
display: flex;
align-items: center;
`

export const NavIcon = styled(FaMagneto)`

margin-right: 0.5rem;
`