import { createContext, useState } from 'react'
import useBusStandName from '../Pages/Travel/TravelHooks/useBusStandName';
import useBusState from '../Pages/Travel/TravelHooks/useBusState';

export const TravelContext = createContext()

const TravelProvider = ({children}) => {
    const [searchData, setSearchData] = useState();
    const [districts] = useBusStandName()
    const [allBusData] = useBusState()
    const [filterBus, setFilterBus] = useState()


    const travelData = {
        searchData,
        setSearchData,
        districts,
        allBusData,
        filterBus,
        setFilterBus

    }
  return (<TravelContext.Provider value={travelData} >{children}</TravelContext.Provider>)
}

export default TravelProvider