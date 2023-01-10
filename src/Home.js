import React, { useState, useEffect } from "react";
import StepProgress  from "./Components/Step_progress/Step_progress";
import Title from "./Components/Title/Title";
import { useParams } from "react-router-dom";
import Spiner from "./Components/Spinner/Spiner";
import Qr from "./Components/QrCode/QrCode";
const Home = (props) => {
  const [orderData, setOrderData] = useState({});
  console.log(`orderData`, orderData)
  const { orderNumber } = useParams();
  const [orderLoading, setorderLoading] = useState(true);
  useEffect(() => {
    console.log(`orderNumber`, orderNumber);
    setorderLoading(true);
    fetch(
      "http://ec2-184-72-127-169.compute-1.amazonaws.com:8080/getOrder/" +
        orderNumber
    )
      .then((response) => response.json())
      .then((data) => {
        setOrderData(data.orderInfo);
        setTimeout(()=>setorderLoading(false),700)
      });
  }, [orderNumber]);
  const renderContent = () => {
    return (
      <>{
        orderLoading?
        <Spiner />:
        <StepProgress step={orderData.status} orderData={orderData} />
      }
      </>
    );
  };
  return (
    <>
      {orderData !== undefined ? (
        <>
          <Title orderId={orderNumber} order={orderData} />
          <Qr/>
          {renderContent()}
          <footer className = "Home-footer">
            <span className="footer-item"> Copyright © 2021 version 1.2-alfa </span>
            <span className="footer-item"> Web Developed by Ruach Technologies </span>
          </footer>
        </>
      ) : (
        <h1>we haven't found that order number, please check it... </h1>
      )}
    </>
  );
};

export default Home;
