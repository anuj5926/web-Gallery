import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { DataContext } from '../Context/ContextApi';
import axios from 'axios';

// this component work on nav bar and header of the website it has features of navigation and search bar
function Header() {

    // use useContext to get state data
    const useContextAPI = useContext(DataContext);

    // this is the local state for search bar query
    const [searchQuery, setSearchQuery] = useState("");

    // this is used to naviagte to other route
    const navigate = useNavigate();

    //this function is used to naviagte to / route
    const handleGalleryClick = () => {
        navigate('/');  
    };

    // this function is used to call api according to the query in search box and update data in state
    const handleSearch = () => {
        (async ()=>{
            if(searchQuery && searchQuery?.length > 0){
                useContextAPI.setIsLoading(true);
                const allData = await axios.get(`${import.meta.env.VITE_APP_NASA_API_DYNAMIC_SEARCH}search?q=${searchQuery}&media_type=image`);
                console.log("🚀 ~ allData:", allData,allData?.data?.collection?.items?.length)
                if(allData.status === 200  && allData?.data?.collection?.items && allData?.data?.collection?.items?.length > 0){
                    useContextAPI.setAllTypeData(allData.data.collection.items);
                    useContextAPI.setPage(1);
                    useContextAPI.setCancelRemove(false);
                }else{
                    useContextAPI.setAllTypeData([]);
                    useContextAPI.setIsLoading(false);
                }
            }
        })()
    };

    //this function is used to naviagte to /collection route
    const handleCollectionClick = () => {
        navigate('/collection');  
    };

    // this function is used to switch theme
    const handleThemeClick = () => {
        useContextAPI.setTheme(useContextAPI.theme === "light"? "dark":"light"); 
    };

    return (
        <>
        {/* this is the ui part of the header  */}
            <header className="header">
                {/* this is the logo  */}
                <div className="logo">
                    <img src="/logo.jpg" alt="Logo" />
                </div>
                {/* thses are the button for naviagte and theme change  */}
                <div>
                    <button onClick={handleGalleryClick} className="tab-button">Gallery</button>
                    <button onClick={handleCollectionClick} className="tab-button">Collections</button>
                    <button onClick={handleThemeClick} className="tab-button">{useContextAPI?.theme === "light" ? "Switch to Dark Theme":"Switch to Light Theme"}</button>
                </div>
                {/* this is the search bar for query data  */}
                <div className="search-bar">
                    <input
                        type="text"
                        placeholder="Search..."
                        onChange={(e)=>setSearchQuery(e.target.value)}
                    />
                    {/* button to search  */}
                    <button onClick={handleSearch} className="tab-button">search</button>
                </div>
            </header>
        </>
    )
}

export default Header