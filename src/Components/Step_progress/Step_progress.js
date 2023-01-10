import React, { useState, useEffect } from "react";
import Step from "./Step/Step";
import Button from "../Button/ShareButton";
import StepProgressStyle from "./Step_progress.module.css";
//icons
import * as FaIcons from "react-icons/fa";
import * as giIcons from "react-icons/gi";
import CarrierTracking from "../Button/CarrierTracking";
import { getIndex } from "../../helpers";

const StepProgress = (props) => {
  const [steps] = useState([
    {
      icon: <FaIcons.FaTruck />,
      text: "International Transit",
    },
    {
      icon: <giIcons.GiPoliceOfficerHead />,
      text: "Customs Process",
    },
    {
      icon: <FaIcons.FaWarehouse />,
      text: "In Warehouse",
    },
    {
      icon: <FaIcons.FaTruck />,
      text: "Local distribution",
    },
    {
      icon: <FaIcons.FaHome />,
      text: "Delivered",
    },
  ]);
  
  const [currentSteps, setCurrentSteps] = useState(props.step);
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    setCurrentSteps(props.step);
  },[setCurrentSteps,props]);
  useEffect(() => {
    setCurrentIndex(getIndex(currentSteps));
  },[setCurrentSteps,getIndex,currentSteps]);

  return (
    <div className={StepProgressStyle.progress}>
      <div className={StepProgressStyle.container}>
        {steps.map((step, index) => (
          <Step
            key={index + 1}
            index={index}
            currentIndex={currentIndex}
            icon={step.icon}
            text={step.text}
          />
        ))}
      </div>
      <div className={StepProgressStyle.buttons}>
        <Button />
        <CarrierTracking step={props.step} orderData={props.orderData}/>
      </div>
    </div>
  );
};

export default StepProgress;
