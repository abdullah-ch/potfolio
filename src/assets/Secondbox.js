import React from 'react';
import { AiFillHtml5 } from 'react-icons/ai';
import { FaJsSquare, FaCss3Alt, FaNode, FaReact } from 'react-icons/fa';
import coding from './coding.png';
import Thirdbox from "./Thirdbox"
 
export function Secondbox(){
    return (
        <>
            <div>
                <div>
                    <img src={coding} alt='coding' className='left coding' />
                </div>
                <div className='right secondbox'>
                    <h1>What i do</h1>
                    <p>CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK</p>

                    <span className='icons'>
                        <FaJsSquare />
                    </span>
                    <span className='icons'>
                        <FaNode />
                    </span>
                    <span className='icons'>
                        <FaReact />
                    </span>
                    <span className='icons'>
                        <FaCss3Alt />
                    </span>
                    <span className='icons'>
                        <AiFillHtml5 />
                    </span>
                    <p className='content2'>
                        ⚡ Deep Learning and Machine Learning Computer Vision Applications
                        <br /> ⚡ Data Visualization with Matplotlib,Seaborn & D3.js <br />⚡ Nodejs
                        & Express API Development <br />⚡ Deployment of ML apps across different
                        platforms <br />⚡ Data Science with Pandas,Numpy & ScikitLearn
                        <br /> ⚡ Full Stack Python and Django Development <br />⚡ Java Swing
                        Enterprise Application Development
                        <br /> ⚡ Python Tkinter & PYQT5 Desktop Applications
                    </p>
                </div>
                <Thirdbox />
            </div>
        </>
    );
}