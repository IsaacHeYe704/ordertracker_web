import React from 'react'
import QrCode from 'qrcode.react'
import {
    useParams
  } from "react-router-dom";
import "./QrCode.css"

const baseUrl = "https://my-ordertracker.web.app/"


const Qr = () => {
    const { orderNumber } = useParams();
    return (
        <div className="Qrcode-container">
        <QrCode  value={baseUrl+""+orderNumber} />
        <h2>Use this Qr code in order to share this order</h2>
    </div>
    )
}

export default Qr
