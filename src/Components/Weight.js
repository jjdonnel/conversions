import React, { useState } from "react";
import { motion } from 'framer-motion';

function Weight() {

    const [ weight, setWeight ] = useState({
        pounds: 0, kilograms: 0, stones: 0, ounces: 0
    })

    const changePounds = e => setWeight({
        pounds: e.target.value,
        kilograms: (+e.target.value * 0.454).toFixed(2),
        stones: (+e.target.value * 0.071).toFixed(2),
        ounces: (+e.target.value * 16).toFixed(2)
    })

    const changeKilograms = e => setWeight({
        pounds: (+e.target.value * 2.20).toFixed(2),
        kilograms: e.target.value,
        stones: (e.target.value * 0.157).toFixed(2),
        ounces: (+e.target.value * 2.20 * 16).toFixed(2)
    })

    const changeStones = e => setWeight({
        pounds: (+e.target.value * 14).toFixed(2),
        kilograms: (+e.target.value * 6.35).toFixed(2),
        stones: e.target.value,
        ounces: (+e.target.value * 14 * 16).toFixed(2)
    })

    const changeOunces = e => setWeight({
        pounds: (+e.target.value / 16).toFixed(2),
        kilograms: (+e.target.value * 0.028).toFixed(2),
        stones: (+e.target.value / 16 / 14).toFixed(2),
        ounces: e.target.value 
    })

    return (
    
        <div className="weight">
            <motion.div
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }}
                exit={{opacity: 0}}
                transition={{ duration: 0.5 }} className='parent' style={{ color: "black"}}
            > 
                <h3>Weight</h3>
                <h4>Weight in Pounds:</h4> 
                <input type="number" value={weight.pounds} onChange = {changePounds}></input>

                <h4>Weight in Kilograms:</h4>
                <input type="number" value={weight.kilograms} onChange = {changeKilograms}></input>

                <h4>Weight in Stones:</h4> 
                <input type="number" value={weight.stones} onChange = {changeStones}></input>

                <h4>Weight in Ounces:</h4> 
                <input type="number" value={weight.ounces} onChange = {changeOunces}></input>
            </motion.div>
        </div>
        
    )
}
export default Weight;