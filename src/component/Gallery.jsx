import React from 'react'
import AddRemove from './AddRemove'
import Home from './Home'
import Pagination from './Pagination'

// this component will mount 3 component i.e pagination, all images and upload and remove button
function Gallery() {
    return (
        <>
            <AddRemove />
            <Home />
            <Pagination />
        </>
    )
}

export default Gallery