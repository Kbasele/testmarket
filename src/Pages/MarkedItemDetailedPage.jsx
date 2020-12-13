import React from 'react'
import DetailedItem from '../Components/DetailedItem'
import Fetch from '../Components/Fetch'

export default function MarketItemDetailPage(props) {
    const market = props.match.params.market;
    const value = props.match.params.value;
    const subName = props.match.params.subName
    console.log(market)
    console.log("hej")
    return (
        <div>
             <Fetch fetchThis="detailPage" subName="sek" value={value} market={market}/>
            
        </div>
    )
}
 