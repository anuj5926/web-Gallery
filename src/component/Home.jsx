import React, { useContext } from 'react'
import { DataContext } from '../Context/ContextApi';
import { TransformComponent, TransformWrapper } from 'react-zoom-pan-pinch';

function Home() {

    const useContextAPI = useContext(DataContext);

    const handleRemove = (index) => {
        const removeImage = ((useContextAPI.page - 1) * 10) + index;                                                
        console.log(removeImage);
        const updatedItems = [...useContextAPI?.allTypeData];
        updatedItems.splice(index, 1);
        useContextAPI.setAllTypeData(updatedItems);
    }

    return (
        <>
            <div className="gallery">
                {useContextAPI.isLoading && <div className="loader">Loading...</div>}
                {!useContextAPI.isLoading && useContextAPI?.pageData?.length === 0 && <div className="loader">No data Found</div>}
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