import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from 'framer-motion';

function Temperature() {

    const [ temperature, setTemperature ] = useState({
        f: 0, c: 0, k: 0
    })

    const changeF = e => setTemperature({
        f: e.target.value,
        c: ((+e.target.value - 32) / 1.8).toFixed(),
        k: ((+e.target.value - 32) / 1.8 + 273.15).toFixed(2)
    })

    const changeC = e => setTemperature({
        f: (+e.target.value * 1.8 + 32).toFixed(),
        c: e.target.value,
        k: (+e.target.value + 273.15).toFixed(2)
    })

    const changeK = e => setTemperature({
        f: ((+e.target.value - 273.15) * 1.8 + 32).toFixed(),
        c: (+e.target.value - 273.15).toFixed(),
        k: e.target.value
    })

    return (
        <div className="temperature">
            <motion.div
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }}
                exit={{opacity: 0}}
                transition={{ duration: 0.5 }} className='parent' style={{ color: "black"}}
            > 
                <h3>Temperature</h3>
                <h4>Degrees Fahrenheit:</h4>
                <input type="number" value={temperature.f} onChange = {changeF}></input>

                <h4>Degrees Celsius:</h4> 
                <input type="number" value={temperature.c} onChange = {changeC}></input>

                <h4>Degrees Kelvin:</h4> 
                <input type="number" value={temperature.k} onChange = {changeK}></input>
            </motion.div>
        </div>
    )
}
export default Temperature;