import React from 'react'
import Fetch from '../Components/Fetch'

export default function Markets() {
    return (
        <div>
            <h1>marketgrejer</h1>
            <Fetch fetchThis={"markets"}/>
        </div>
    )
}
