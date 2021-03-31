import styled from 'styled-components'
import { useAppContext } from '../context'

const Background = styled.div`
   display: grid;
   place-items: center;
   background: ${props => props.theme === "light" ? "#bbb" : "#1F2041"};
   height: 100vh; 
`

const Layout = ({children}) =>{
    const {state} = useAppContext()
    console.log(state)
    return <Background theme= {state.theme}>
       <div>{children}</div> 
        </Background>
}

export default Layout 