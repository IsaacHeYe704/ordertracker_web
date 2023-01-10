import React, { useState, useEffect } from "react";
import TitleStyle from "./Title.module.css";
import moment from "moment";
const Title = (props) => {
  const [dateText, setdateText] = useState("");
  const [date, setdate] = useState("");
  const [delivery, setDelivery] = useState("");
  const formatDate = (date) => {
    const dateFormated = moment(date);
    return dateFormated.format("dddd  LL");
  };
  useEffect(() => {
    setdateText(
      props.order.status !== "Delivered"
        ? "Estimated delivery date: "
        : "Delivery Date: \n"
    );
    setDelivery(
      props.order.status !== "Delivered" && props.order.status !== undefined
        ? "from " +
            formatDate(props.order.initialEdd.split(" ")[0]) +
            " to " +
            formatDate(props.order.finalEdd.split(" ")[0])
        : props.order.status !== undefined
        ? formatDate(props.order.actualDelivery.split("i")[0])
        : ""
    );
  }, [setdateText, setDelivery, props]);
  useEffect(() => {
    setdate(props.order.finalEdd !== undefined ? delivery : "");
  }, [setdate, delivery, props]);

  return (
    <div className={TitleStyle.container}>
      <h3 className={TitleStyle.h3}>MyOrderTracker</h3>
      <h1 className={TitleStyle.h1}>Order #{props.orderId}</h1>
      <h2 className={TitleStyle.h2}>
        {" "}
        {dateText}
        <br />
        {date}
      </h2>
      <br></br>
    </div>
  );
};
export default Title;
