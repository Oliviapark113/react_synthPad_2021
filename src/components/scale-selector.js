import {useAppContext} from '../context/'
import scales from "../utils/scales"
import styled from "styled-components"

const Select = styled.select`
      font-size: 24px; 
      border: 2px solid black;
      border-radius: 10px; 
      padding: 0px; 
      background: transparent;
      ${props => props.theme === "light" ?`` :`
      color: white;
      border-color: white;

      @media screen and (max-width:768px){
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
       align-items: center;
      
      }
      ` }
   

`


const categories = Object.entries(scales).reduce((accumulator, curr)=>{
// console.log(curr)
const [key, scale] = curr
// console.log(scale)
accumulator[scale.theme].push(key)
return accumulator 
}, { light: [], dark: []})

console.log(categories)
//scales is object
// {
//    light: [ "light", ...]
// }

const ScaleSelector = () =>{
    const { state, dispatch } = useAppContext()
    return(
        <Select theme ={state.theme} onChange = { e => dispatch({ type:"CHANGE_SCALE",  payload: e.target.value})}>

     {Object.entries(categories).map(cat => { 
         const [categoryName, scaleNames] = cat
        return(
            <optgroup label={categoryName} key={categoryName} >
                {scaleNames.map(name=><option value={name} key={name}>{name}</option>)}
            </optgroup>
        )
     })}
        </Select>
    )
}

export default ScaleSelector