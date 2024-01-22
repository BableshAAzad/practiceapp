import { useEffect, useState } from 'react';

function useFetchApi(apiUrl) {
    let [apiData, setApiData] = useState([]);
    let [isLoading, setIsLoading] = useState(false);
    let [isError, setIsError] = useState(false);
    let getApiData = async () => {
        try {
            let data = await fetch(apiUrl);
            data = await data.json();
            setApiData(data);
            setIsLoading(false)
            setIsError(false);
            // console.log(data)
        } catch (error) {
            setIsError(true);
            setIsLoading(false)
            console.log(error)
        }
    }
    useEffect(() => {
        setIsLoading(true)
        getApiData();
        // eslint-disable-next-line
    }, []);
    return ({apiData, isLoading, isError});
}
export default useFetchApi
