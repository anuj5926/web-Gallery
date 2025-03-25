import axios from "axios";
import { createContext, useEffect, useState } from "react";

export const DataContext = createContext(null)
const ContextApi = ({ children }) => {

    const [allTypeData, setAllTypeData] = useState([]);
    const [page, setPage] = useState(0);
    const [pageData, setPageData] = useState([]);
    const [cancelRemove, setCancelRemove] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const [theme, setTheme] = useState("light");
    const [collection, setCollection] = useState([]);

    useEffect(() => {
        (async () => {
            const allData = await axios.get(`${import.meta.env.VITE_APP_NASA_API}`)
            if(allData.status === 200 && allData?.data?.collection?.items && allData?.data?.collection?.items?.length > 0){
                console.log("🚀 ~ allData:", allData)
                setAllTypeData(allData.data.collection.items);
                setPage(1);
            }else{
                setAllTypeData([]);
                setIsLoading(false);
            }
        })()
    }, [])

    useEffect(() => {
        if (page && allTypeData) {
            setPageData(allTypeData?.slice((page - 1) * 10, page * 10));
        }
    }, [page])

    useEffect(() => {
        if (pageData && pageData.length > 0) {
            let loadedCount = 0;

            const handleImageLoad = () => {
                loadedCount++;
                if (loadedCount === pageData.length) {
                    setIsLoading(false);
                }
            };

            pageData?.forEach((src) => {
                const img = new Image();
                img.src = src.links[0].href;
                img.onload = handleImageLoad;
                img.onerror = handleImageLoad;
            });
        }
    }, [pageData]);

    useEffect(() => {
        if (allTypeData) {
            setPage(1);
            setPageData(allTypeData?.slice(0 * 10, 1 * 10));
            const chunkArray = (arr, chunkSize) => {
                const result = [];
                for (let i = 0; i < arr.length; i += chunkSize) {
                    result.push(arr.slice(i, i + chunkSize));
                }
                return result;
            };

            const chunkedData = chunkArray(allTypeData || [], 10);
            setCollection(chunkedData);
        }
    }, [allTypeData])

    return (
        <DataContext.Provider value={{collection, theme, setTheme, isLoading, setCancelRemove, setIsLoading, cancelRemove, pageData, setPage, page, setAllTypeData, allTypeData }}>{children}</DataContext.Provider>
    )

}


export default ContextApi;