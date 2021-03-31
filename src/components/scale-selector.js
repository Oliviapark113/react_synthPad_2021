import {useAppContext} from '../context/'
import scales from "../utils/scales"


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
    const { dispatch } = useAppContext()
    return(
        <select onChange = { e => dispatch({ type:"CHANGE_SCALE",  payload: e.target.value})}>

     {Object.entries(categories).map(cat => { 
         const [categoryName, scaleNames] = cat
        return(
            <optgroup label={categoryName} key={categoryName} >
                {scaleNames.map(name=><option value={name} key={name}>{name}</option>)}
            </optgroup>
        )
     })}
        </select>
    )
}

export default ScaleSelector