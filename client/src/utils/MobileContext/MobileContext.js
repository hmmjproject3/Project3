import { createContext } from 'react'

const MobileContext = createContext({

    width: window.innerWidth,
    handleResize()
  
})

export default MobileContext