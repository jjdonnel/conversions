import React, { useState } from "react";
import { motion } from 'framer-motion';

function Speed() {

    const [ speed, setSpeed ] = useState({
        mph: 0, kph: 0, kts: 0, mach: 0
    })

    const changeMph = e => setSpeed({
        mph: e.target.value,
        kph: (+e.target.value * 1.61).toFixed(2),
        kts: (+e.target.value * 0.87).toFixed(2),
        mach: (+e.target.value *0.0013).toFixed(2)
    })

    const changeKph = e => setSpeed({
        mph: (+e.target.value * 0.62).toFixed(2),
        kph: e.target.value,
        kts: (+e.target.value * 0.54).toFixed(2),
        mach: (+e.target.value * 0.0008).toFixed(2)
    })

    const changeKts = e => setSpeed({
        mph: (+e.target.value * 1.15).toFixed(2),
        kph: (+e.target.value * 1.852).toFixed(2),
        kts: e.target.value,
        mach: (+e.target.value * 0.0015).toFixed(2)
    })

    const changeMach = e => setSpeed({
        mph: (+e.target.value * 767.27).toFixed(2),
        kph: (+e.target.value * 1234.8).toFixed(2),
        kts: (+e.target.value * 666.74).toFixed(2),
        mach: e.target.value 
    })

    return (
        <div className="speed">
            <motion.div
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }}
                exit={{opacity: 0}}
                transition={{ duration: 0.5 }} className='parent' style={{ color: "black"}}
            > 
                <h3>Speed</h3>
                <h4>Speed in MPH:</h4> 
                <input type="number" value={speed.mph} onChange = {changeMph}></input>

                <h4>Speed in KPH:</h4>
                <input type="number" value={speed.kph} onChange = {changeKph}></input>

                <h4>Speed in KTS:</h4> 
                <input type="number" value={speed.kts} onChange = {changeKts}></input>

                <h4>Speed in MACHS:</h4> 
                <input type="number" value={speed.mach} onChange = {changeMach}></input>
            </motion.div>
        </div>
    )
}
export default Speed;