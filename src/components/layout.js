import styled from 'styled-components'
import { useAppContext } from '../context'

const ControlsContainer = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
margin-bottom: 25px;

`

const Background = styled.div`
   display: grid;
   place-items: center;
   background: ${props => props.theme === "light" ? "#bbb" : "#1F2041"};
   height: 100vh; 
`

const Layout = ({children, controls}) =>{
    const {state} = useAppContext()
    console.log(state)
    return <Background theme= {state.theme}>
    
          <div>
          <ControlsContainer>{controls}</ControlsContainer>
             {children}
             </div>
        </Background>
}

export default Layout 