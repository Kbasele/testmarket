import React from 'react'
import {Link} from 'react-router-dom'

export default function MarketItem({value, market}) {
    return (
        <div className="row ml-1">
            <p>{value}</p>
            <Link to={`/market/${market}/${value}`}>go to</Link>
        </div>
    )
}
