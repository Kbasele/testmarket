import React from 'react'

export default function DetailedItem({value, ticker}) {
    console.log(ticker)
    return (
        <div>
            {Object.entries(value[ticker]).map(index=>{
                console.log(value[ticker])
                return <p>{index[1]}</p>
            })}
        </div>
    )
}
