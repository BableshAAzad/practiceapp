import React, { useState } from 'react';
import "./PisSlider.css";;
// import unsplash1 from "./imagesFol/unsplash1.jpg"
const img1 = require("./imagesFol/unsplash1.jpg");
const img2 = require("./imagesFol/unsplash2.jpg");
const img3 = require("./imagesFol/unsplash3.jpg");
const img4 = require("./imagesFol/unsplash4.jpg");
const img5 = require("./imagesFol/unsplash5.jpg");
const img6 = require("./imagesFol/unsplash6.jpg");
// const img6 = "https://source.unsplash.com/1400x400/?nature, river";


function PicSlider() {
    let arr = [img1, img2, img3, img4, img5, img6]
    let [count, setcount] = useState(0);
    let increseCount = () => {
        if (count < 5) {
            setcount(count + 1)
            // console.log(count)
        } else {
            setcount(0)
        }
    }
    let decreseCount = () => {
        if (count > 0) {
            setcount(count - 1)
            // console.log(count)
        } else {
            setcount(5)
        }
    }
    // console.log(arr[count])
    // setInterval(() => {
    //     if (count < 5) {
    //         setcount(count + 1)
    //     } else {
    //         setcount(0)
    //     }
    // }, 3000)
    return (
        <div>
            <section id='mainSec'>
                <img className='picsize' key={1} src={arr[count]} alt="not loader" />
                {/* {arr.map((val, ind) => {
                    return <img className='picsize' key={ind} src={arr[count]} alt="not loader" />;
                })} */}
            </section>
            <div id="bt1" onClick={decreseCount}><i className="fa-solid fa-arrow-left fa-beat"></i></div>
            <div id="bt2" onClick={increseCount}><i className="fa-solid fa-arrow-right fa-beat"></i></div>
        </div>
    )
}

export default PicSlider
