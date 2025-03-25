import React, { useContext } from 'react'
import { DataContext } from '../Context/ContextApi';
import { useNavigate } from 'react-router-dom';

function Collection() {

  const useContextAPI = useContext(DataContext);
  const navigate = useNavigate();


  const handlePage = (pageNumber) => {
    useContextAPI.setPage(pageNumber)
    navigate("/collection/gallery")
}

  return (
    <>
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