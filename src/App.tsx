import Hero from "./assets/Hero"
import Cards from "./assets/Cards"
import { useState } from "react"

function App() {

const [ dark, setDark ] = useState<string>('')

  return (
   <div className="bg-gradient-to-br from-colorbgLight to-colorbgLight2 text-colortextLight font-general dark:bg-gradient-to-br dark:from-colorbg1 dark:to-colorbg2 dark:text-colortext">
    <Hero dark={dark} setDark={setDark}/>
    <Cards dark={dark}/>
   </div>
  )
}

export default App
