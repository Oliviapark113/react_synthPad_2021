import { useEffect } from 'react'
import styled from 'styled-components'
import {useAppContext} from '../context'
import {DuoSynth, FMSynth } from 'tone'
import Pad from './pad'

const PadGrid = styled.div`
display: grid; 
grid-template-columns: repeat(6, 1fr);
grid-gap: 15px;


`
const Synth = () => {
   const {state} = useAppContext()
   console.log(state)
  const synth = state.theme === 'light' ? 
    new FMSynth()
  : new DuoSynth()
  
  synth.toDestination()

  useEffect (()=>{
      window.addEventListener('keydown', handleKeydown)
      return () => window.removeEventListener('keydown', handleKeydown)
      //cleanup useEffect
  }, [])

  const handleKeydown = e => playSound(e.key)

  const playSound = letterPressed => {
    const foundNote = state.notes.find(note => note.letter === letterPressed)
    console.log(foundNote)
      synth.triggerAttackRelease(foundNote.note, "8n")
  }

    return (
        <PadGrid>
            {state.notes.map(noteObj => 
            (<Pad { ...noteObj} playSound={playSound} key={noteObj.letter} />) )}
        </PadGrid> 
    )
}

export default Synth;