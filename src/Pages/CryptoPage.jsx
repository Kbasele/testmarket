import React from 'react'
import Fetch from '../Components/Fetch'

export default function Crypto() {
    return (
        <div>
            <h1>Cryptogrejer</h1>
            <Fetch fetchThis={"crypto"} subName={"usd"}/>
        </div>
    )
}
