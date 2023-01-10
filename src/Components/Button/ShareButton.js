import React,{useState} from "react";
import "./Button.css";
import { useAlert } from 'react-alert'
import {
  useParams
} from "react-router-dom";
const baseUrl = "https://my-ordertracker.web.app/"
const Button = () => {
  const { orderNumber } = useParams();
  const alert = useAlert();
  const copyLink =()=>
  {
    const el = document.createElement('textarea');
    el.value = baseUrl+""+orderNumber;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    alert.show("link copied to clipboard");
  }
  return (
    <>
      <button className="shareButton" onClick={copyLink}>
        <div className="text">Copy this link </div>
      </button>
    </>
  );
};

export default Button;
