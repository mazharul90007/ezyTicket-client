import { createContext } from 'react'

export const TravelContext = createContext()

const TravelProvider = ({children}) => {

    const travelData = {
        name: "kobirul"
    }
  return (<TravelContext.Provider value={travelData} >{children}</TravelContext.Provider>)
}

export default TravelProvider