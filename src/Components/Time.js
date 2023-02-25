import React, { useState } from "react";
import { motion } from 'framer-motion';

function Time() {

    const [ time, setTime ] = useState({
        s: 0, m: 0, h: 0, d: 0, y: 0
    })

    const changeSeconds = e => setTime({
        s: e.target.value,
        m: (+e.target.value / 60).toFixed(2),
        h: (+e.target.value / 3600).toFixed(2),
        d: (+e.target.value / 86400).toFixed(2),
        y: (+e.target.value / 31536000).toFixed(2),
    })

    const changeMinutes = e => setTime({
        s: (+e.target.value * 60).toFixed(2),
        m: e.target.value,
        h: (+e.target.value / 60).toFixed(2),
        d: (+e.target.value / 1440).toFixed(2),
        y: (+e.target.value / 525600).toFixed(2),
    })

    const changeHours = e => setTime({
        s: (+e.target.value * 3600).toFixed(2),
        m: (+e.target.value * 60).toFixed(2),
        h: e.target.value,
        d: (+e.target.value /24).toFixed(2),
        y: (+e.target.value / 8760).toFixed(2),
    })

    const changeDays = e => setTime({
        s: (+e.target.value * 86400).toFixed(2),
        m: (+e.target.value * 1440).toFixed(2),
        h: (+e.target.value * 24).toFixed(2),
        d: e.target.value,
        y: (+e.target.value / 365).toFixed(2),
    })


    const changeYears = e => setTime({
        s: (+e.target.value * 31536000).toFixed(2),
        m: (+e.target.value * 525600).toFixed(2),
        h: (+e.target.value * 8760).toFixed(2),
        d: (+e.target.value * 365).toFixed(2),
        y: e.target.value,
    })

    return (
        <div className="time">
            <motion.div
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }}
                exit={{opacity: 0}}
                transition={{ duration: 0.5 }} className='parent' style={{ color: "black"}}
            > 
                <h3>Time</h3>
                <h4>Time in seconds:</h4> 
                <input type="number" value={time.s} onChange = {changeSeconds}></input>

                <h4>Time in minutes:</h4>
                <input type="number" value={time.m} onChange = {changeMinutes}></input>

                <h4>Time in hours:</h4> 
                <input type="number" value={time.h} onChange = {changeHours}></input>

                <h4>Time in days:</h4> 
                <input type="number" value={time.d} onChange = {changeDays}></input>

                <h4>Time in years:</h4> 
                <input type="number" value={time.y} onChange = {changeYears}></input>
            </motion.div>
        </div>
    )
}
export default Time;