import React, {useEffect, useState} from 'react'
import DetailedItem from './DetailedItem'
import MarketItem from './MarketItem'

export default function Fetch({fetchThis, subName, market, value}) {

    const [MarketData, setMarketData] = useState(null)

    useEffect(()=>{
        const url ="https://market-data-collector.firebaseio.com/market-collector.json"
        fetch("https://market-data-collector.firebaseio.com/market-collector.json")
        .then(res => res.json())
        .then(data =>{
            /* console.log(Object.entries(data)[1][1]["sek"])
            console.log(Object.entries(data)[1]) */
            setMarketData(data)
        })
    },[])

    
    if(fetchThis === "markets"){
        return (
            <div>
                {!MarketData && "LOADING"}
                {MarketData && Object.entries(MarketData).map(item =>{
                    return <MarketItem value={item[0]}/>
                })}
            </div>
        )
    }
    if(fetchThis==="detailPage2"){
        return(
            <div>
                {!MarketData && "LOADING"}
               {
               /* console.log(MarketData && Object.entries(MarketData)) */
                MarketData && Object.entries(MarketData["crypto"]["usd"]).map(item=>{
                    console.log(MarketData[market]["usd"]["0X-CRYPTO"]["price"])
                    return <DetailedItem 
                    value={item[0]}
                    
                    />
                })} 
            </div>
        )

    }
    if(fetchThis==="detailPage"){
        return(
            <div>
                {!MarketData && "LOADING"}
               {
               /* console.log(MarketData && Object.entries(MarketData)) */
                MarketData && Object.entries(MarketData[market])[0].map(item=>{
                    console.log(Object.entries(MarketData[market])[0])
                    return <DetailedItem 
                    value={item[1]}
                    
                    />
                })} 
            </div>
        )

    }
    
    return (
        <div>
            {!MarketData && "LOADING"}
                {MarketData && Object.entries(MarketData[fetchThis][subName]).map(item =>{
                    console.log(item[0])
                    return <MarketItem value={item[0]} market={fetchThis}/>
                })}
        </div>
    )
}
