import React, { useState, useEffect } from 'react'
import {useParams, withRouter} from "react-router-dom"


function ItemData({props}) {
        
    const { name, price } = useParams()
    return (

        <div>
            <div>My name: {name}</div>
            <div>Its my price: {price}</div>
            
        </div>
    )
}

export default withRouter(ItemData)