import './App.css'
import {Listing} from './components/Listing'
import '../css/main.css'
import json from '../data/etsy.json'

function App() {
  return (
    <>
    <Listing items={json}/>
    </>
  )
}

export default App
