import React, { useState } from "react";
import { motion } from 'framer-motion';

function Pressure() {

    const [ pressure, setPressure ] = useState({
        inHg: '', Mb: '', Psi: ''
    })

    const changeHg = e => setPressure({
        inHg: e.target.value,
        Mb: (+e.target.value * 33.86).toFixed(2),
        Psi: (+e.target.value * 0.49).toFixed(2)
    })

    const changeMb = e => setPressure({
        inHg: (+e.target.value * 0.03).toFixed(2),
        Mb: e.target.value,
        Psi: (+e.target.value * 0.0145).toFixed(2)
    })

    const changePsi = e => setPressure({
        inHg: (+e.target.value * 2.04).toFixed(2),
        Mb: (+e.target.value * 68.95).toFixed(2),
        Psi: e.target.value
    })

    return (
        <div className="pressure">
            <motion.div
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }}
                exit={{opacity: 0}}
                transition={{ duration: 0.5 }} className='parent' style={{ color: "black"}}
            > 
                <h3>Pressure</h3>
                <h4>Inches of Mercury:</h4> 
                <input type="number" value={pressure.inHg} onChange = {changeHg}></input>

                <h4>Millibars:</h4>
                <input type="number" value={pressure.Mb} onChange = {changeMb}></input>

                <h4>Psi:</h4>
                <input type="number" value={pressure.Psi} onChange = {changePsi}></input>
            </motion.div>
        </div>
    )
}
export default Pressure;