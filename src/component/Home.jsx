import React, { useContext } from 'react'
import { DataContext } from '../Context/ContextApi';
import { TransformComponent, TransformWrapper } from 'react-zoom-pan-pinch';

// this is the component where we show all the images by default and with pagination
function Home() {

    // use useContext to get state data
    const useContextAPI = useContext(DataContext);

    // this function is used to remove the image and update state according tot it
    const handleRemove = (index) => {
        const removeImage = ((useContextAPI.page - 1) * 10) + index;                                                
        console.log(removeImage);
        const updatedItems = [...useContextAPI?.allTypeData];
        updatedItems.splice(index, 1);
        useContextAPI.setAllTypeData(updatedItems);
    }

    return (
        <>
        {/* this is the ui part of the galley  */}
            <div className="gallery">
                {/* this is loader shown in ui  */}
                {useContextAPI.isLoading && <div className="loader">Loading...</div>}
                {/* if having npo data then show no data found  */}
                {!useContextAPI.isLoading && useContextAPI?.pageData?.length === 0 && <div className="loader">No data Found</div>}
                {/* otherwise show data and use zoom in and zoom out feature too  */}
                <ul>
                    {!useContextAPI.isLoading && useContextAPI?.pageData && useContextAPI?.pageData?.map((item, i) => (
                        <li key={i}>
                            <TransformWrapper>
                                <TransformComponent>
                                    <img src={item.links[0].href} />
                                </TransformComponent>
                            </TransformWrapper>
                            {useContextAPI?.cancelRemove && <button onClick={() => handleRemove(i)}>Remove</button>}
                        </li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default Home