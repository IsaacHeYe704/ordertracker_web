import React, { useEffect, useState } from 'react'
import { getIndex } from '../../helpers'
const CarrierTracking = (props) => {
    const [link, setlink] = useState("facebook.com")
    const [step, setstep] = useState("facebook.com")
    
    useEffect(() => {
        setstep(getIndex(props.step)); 
        step <= 3  
        ? setlink(props.orderData.domsCarrierLink)  
        :setlink(props.orderData.deliveryCarrierLink); 
        console.log(`props.orderData <= 3`, step <= 3  )
    })
    
    const onClick = ()=>
    {
        window.open(link, '_blank');
    }
    return (
        <button className="carrierButton" onClick={()=>{onClick()}}>
            
            <div className="text" >Carrier Tracking</div>
        </button>
    )
}

export default CarrierTracking
