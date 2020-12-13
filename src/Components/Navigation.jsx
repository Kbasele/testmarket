import React from 'react'
import {Link} from 'react-router-dom'
export default function Navigation() {
    return (
        <div>
            <Link to="crypto">Crypto</Link>
            <Link to="currencies">Currencies</Link>
            <Link to="markets">Markets</Link>
            <Link to="indexes">Indexes</Link>
        </div>
    )
}
