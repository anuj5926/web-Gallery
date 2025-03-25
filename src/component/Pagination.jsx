import React, { useContext } from 'react'
import { DataContext } from '../Context/ContextApi';

function Pagination() {

    const useContextAPI = useContext(DataContext);

    const handlePrevious = () => {
        if (useContextAPI.page > 1) {
            useContextAPI.setPage(useContextAPI.page - 1);
            useContextAPI.setIsLoading(true);
        }
    }

    const handleNext = () => {
        if ((useContextAPI.allTypeData.length / 10) >= useContextAPI.page) {
            useContextAPI.setPage(useContextAPI.page + 1);
            useContextAPI.setIsLoading(true);
        }
    }

    const handlePage = (pageNumber) => {
        useContextAPI.setPage(pageNumber)
        useContextAPI.setIsLoading(true);
    }

    return (
        <>
            {!useContextAPI.isLoading && useContextAPI?.allTypeData && useContextAPI?.allTypeData.length > 0 && 
             <nav >
                <ul className={`pagination ${useContextAPI.theme === "dark" && "pagination-dark"}`}>
                    <li onClick={handlePrevious} className={`page-item ${useContextAPI.page === 1 && "disabled"}`}>
                        <a className="page-link" tabIndex={-1}>
                            Previous
                        </a>
                    </li>
                    {Math.ceil(useContextAPI?.allTypeData?.length / 10) >= 1 && <li onClick={() => handlePage(1)} className={`page-item ${useContextAPI.page === 1 && "active"}`}>
                        <a className="page-link">
                            1
                        </a>
                    </li>}
                    {Math.ceil(useContextAPI?.allTypeData?.length / 10) >= 2 && <li onClick={() => handlePage(2)} className={`page-item ${useContextAPI.page === 2 && "active"}`}>
                        <a className="page-link">
                            2
                        </a>
                    </li>}
                    {Math.ceil(useContextAPI?.allTypeData?.length / 10) >= 3 && <li onClick={() => handlePage(3)} className={`page-item ${useContextAPI.page === 3 && "active"}`}>
                        <a className="page-link">
                            3
                        </a>
                    </li>}
                    <li onClick={handleNext} className={`page-item ${useContextAPI.page > 3 && "active"}`}>
                        <a className="page-link">
                            Next
                        </a>
                    </li>
                </ul>
            </nav>}

        </>
    )
}

export default Pagination