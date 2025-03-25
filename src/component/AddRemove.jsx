import React, { useContext, useEffect, useState } from 'react'
import { DataContext } from '../Context/ContextApi';

function AddRemove() {

    const useContextAPI = useContext(DataContext);

    const handleImageUpload = (event) => {
        console.log(URL.createObjectURL(event.target.files[0]))
        let data = {
            id: Date.now(),
            links: [{ href: URL.createObjectURL(event.target.files[0]) }]
        }
        useContextAPI.setAllTypeData(prevData => [data, ...prevData]);
    };

    return (
        <>
           {!useContextAPI.isLoading && <div className='btnhead'>
                <button className="btn upload-btn" onClick={() => document.getElementById("fileInput").click()}>
                    Upload Image
                </button>
                <input
                    type="file"
                    id="fileInput"
                    accept="image/*"
                    style={{ display: "none" }}
                    onChange={handleImageUpload}
                />
               {useContextAPI?.pageData?.length > 0 &&  <button className="btn remove-btn" onClick={() => useContextAPI.setCancelRemove(!useContextAPI.cancelRemove)} >
                    {useContextAPI.cancelRemove === false ? "Remove Image" : "Cancel Remove"}
                </button>}

            </div>}
        </>
    )
}

export default AddRemove;