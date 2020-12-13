import React from 'react'
import {Link} from 'react-router-dom'
export default function Navigation({showMarkets}) {
    return (
            <div>
                <Link to="/crypto">Crypto</Link>
                <Link to="/currencies">Currencies</Link>
                {showMarkets &&<Link to="/markets">Markets</Link>}
                <Link to="/indexes">Indexes</Link>
            </div>
        
    )
}
