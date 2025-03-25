import React, { useContext } from 'react'
import { DataContext } from '../Context/ContextApi';
import { useNavigate } from 'react-router-dom';

// this component is used to show collection of images
function Collection() {

  // use useContext to get state data
  const useContextAPI = useContext(DataContext);

  // this will help to naviagte to different route
  const navigate = useNavigate();

  // this function is called when you clicked on collection and it will naviagte you to that collection images
  const handlePage = (pageNumber) => {
    useContextAPI.setPage(pageNumber)
    navigate("/collection/gallery")
}

  return (
    <>
     {/* this is the whole collection ui part  */}
      <div className="container" >
        <h1>Collection Of Images</h1>
        <div className='category_block'>
        {!useContextAPI.isLoading && useContextAPI?.collection?.length === 0  && <div className="loader">No data Found</div>}
        {useContextAPI?.collection?.map((item, index) => {
          return (
            <div onClick={()=>handlePage(index+1)} className="cardcontainer" key={index}>
              <div className="photo">
                <img src={item[0].links[0].href} alt="Image" />
                <div className="photos">Photos</div>
              </div>
            </div>
          );
        })}
      </div>
      </div>
    </>
  )
}

export default Collection