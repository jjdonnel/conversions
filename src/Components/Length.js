import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from 'framer-motion';

function Length() {

    const [ length, setLength ] = useState({
        feet: 0, meters: 0, miles: 0
    })

    const changeMeters = e => setLength({
        meters: e.target.value,
        feet: (+e.target.value * 3.28).toFixed(2),
        miles: (+e.target.value * 3.28 / 5280).toFixed(2)
    })

    const changeFeet = e => setLength({
        meters: (+e.target.value * 0.305).toFixed(2),
        feet: e.target.value,
        miles: (e.target.value / 5280).toFixed(2)
    })

    const changeMiles = e => setLength({
        meters: (+e.target.value * 5280 * 0.305).toFixed(2),
        feet: (+e.target.value * 5280).toFixed(2),
        miles: e.target.value
    })

    return (
    
        <div className="length">
            <motion.div
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }}
                exit={{opacity: 0}}
                transition={{ duration: 0.5 }} className='parent' style={{ color: "black"}}
            > 
                <h3>Length</h3>
                <h4>Length in Meters:</h4> 
                <input type="number" value={length.meters} onChange = {changeMeters}></input>

                <h4>Length in Feet:</h4>
                <input type="number" value={length.feet} onChange = {changeFeet}></input>

                <h4>Length in Miles:</h4> 
                <input type="number" value={length.miles} onChange = {changeMiles}></input>
            </motion.div>
        </div>
        
    )
}
export default Length;