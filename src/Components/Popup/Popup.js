import React from 'react'
import './Popup.css'
const Popup = (props) => {
    return (
        <div className="courtain">
            <div className="container">
                {props.children}
            </div>
        </div>
    )
}

export default Popup
