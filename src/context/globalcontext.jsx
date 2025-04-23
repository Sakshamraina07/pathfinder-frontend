import React, { createContext, useState, useEffect } from "react"

export const GlobalContext = createContext()

const GlobalContextData = (props) => {
    //All the states comes here.
    const [jobs, setJobs] = useState([])
    const [countJobs, setCountJobs] = useState(10)
    const [searchQuery, setSearchQuery] = useState("")

    const [searchTagResults, setSearchTagResults] = useState([])

    const [geoResults, setGeoResults] = useState([])


    async function fetchJobs() {
        if (jobs.length != 0) {
            // Data is already there in the state so no need to fetch it again.
        }
        else {
            const url = `https://jobicy.p.rapidapi.com/api/v2/remote-jobs?count=${countJobs}`;
            const options = {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': '657991dd92msh28f9aa272d2d394p175c5ajsnf693f8cb86b9',
                    'X-RapidAPI-Host': 'jobicy.p.rapidapi.com'
                }
            };

            try {
                const response = await fetch(url, options);
                const result = await response.json();
                const remotejobs = await result.jobs
                console.log('context', remotejobs)
                await setJobs(jobs => jobs.concat(remotejobs))
                setCountJobs(countJobs => countJobs + 10)
                console.log(remotejobs)

            } catch (error) {
                console.error(error);
            }
        }
    }



    useEffect(() => {
        console.log('hkhkhk')
        fetchJobs()
    }, [])

    return (
        <GlobalContext.Provider value={{ 
            jobs, 
            setJobs, 
            countJobs, 
            setCountJobs, 
            searchTagResults, 
            setSearchTagResults, 
            geoResults, 
            setGeoResults,
            searchQuery,
            setSearchQuery
        }}>
            {props.children}
        </GlobalContext.Provider>
    )
}


export default GlobalContextData