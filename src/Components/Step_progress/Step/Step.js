import React,{useState,useEffect} from 'react'

import StepStyle from './Step.module.css';

//icons imports
import * as FaIcons  from 'react-icons/fa';
const Step = (props) => {
    const [isCircle,setIsCircle] = useState(false);
    const [current,setCurrent] = useState(false);
    const [isDone,setDone] = useState(false);
    useEffect(()=>
    {
        props.currentIndex>(props.index) ? setIsCircle(true):setIsCircle(false);
        props.currentIndex > props.index ? setCurrent(true):setCurrent(false);
        props.currentIndex >= props.index ? setDone(true):setDone(false);
    },[ setIsCircle,props]);
    return (
        <div  className={`${StepStyle.stepContainer} `}>
            <div className={`${!isCircle ? StepStyle.circle:StepStyle.notShowed} ${!current? "": StepStyle.currentIndex}`}>
                {props.currentIndex===(props.index) ?<FaIcons.FaCheck size="13px"/>:null}
            </div>
            <div className={isDone ? StepStyle.iconDone:StepStyle.icon}  >{props.icon}</div>
            <span className={StepStyle.text}>{props.text}</span>
        </div>
    )
}

export default Step
