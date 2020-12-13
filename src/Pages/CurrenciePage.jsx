import React from 'react'
import Fetch from '../Components/Fetch'

export default function Currencies() {
    return (
        <div>
            <h1>Valutagrejer</h1>
            <Fetch fetchThis="currencies" subName="sek"/>
        </div>
    )
}
