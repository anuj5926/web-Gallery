import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { DataContext } from '../Context/ContextApi';
import axios from 'axios';

function Header() {

    const useContextAPI = useContext(DataContext);
    const [searchQuery, setSearchQuery] = useState("");

    const navigate = useNavigate();

    const handleGalleryClick = () => {
        navigate('/');  
    };

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

    const handleCollectionClick = () => {
        navigate('/collection');  
    };

    const handleThemeClick = () => {
        useContextAPI.setTheme(useContextAPI.theme === "light"? "dark":"light"); 
    };

    return (
        <>
            <header className="header">
                <div className="logo">
                    <img src="/logo.jpg" alt="Logo" />
                </div>
                <div>
                    <button onClick={handleGalleryClick} className="tab-button">Gallery</button>
                    <button onClick={handleCollectionClick} className="tab-button">Collections</button>
                    <button onClick={handleThemeClick} className="tab-button">{useContextAPI?.theme === "light" ? "Switch to Dark Theme":"Switch to Light Theme"}</button>
                </div>
                <div className="search-bar">
                    <input
                        type="text"
                        placeholder="Search..."
                        onChange={(e)=>setSearchQuery(e.target.value)}
                    />
                    <button onClick={handleSearch} className="tab-button">search</button>
                </div>
            </header>
        </>
    )
}

export default Header