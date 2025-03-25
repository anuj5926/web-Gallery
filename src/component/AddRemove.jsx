import React, { useContext, useEffect, useState } from 'react'
import { DataContext } from '../Context/ContextApi';

// this component is for upload and remove images
function AddRemove() {

    // use useContext to get state data
    const useContextAPI = useContext(DataContext);

    // used to upload the image and add in state to render 
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
            {/* when isLoading is false than only you can see buttons  */}
           {!useContextAPI.isLoading && <div className='btnhead'>
                {/* this is the buttons to upload images and when someone click i will click in input element to upload image  */}
                <button className="btn upload-btn" onClick={() => document.getElementById("fileInput").click()}>
                    Upload Image
                </button>
                {/* this input field is called when click on button and i make it hidden */}
                <input
                    type="file"
                    id="fileInput"
                    accept="image/*"
                    style={{ display: "none" }}
                    onChange={handleImageUpload}
                />
                {/* this is remove image button and if there is no images it will not show  */}
               {useContextAPI?.pageData?.length > 0 &&  <button className="btn remove-btn" onClick={() => useContextAPI.setCancelRemove(!useContextAPI.cancelRemove)} >
                    {useContextAPI.cancelRemove === false ? "Remove Image" : "Cancel Remove"}
                </button>}

            </div>}
        </>
    )
}

export default AddRemove;