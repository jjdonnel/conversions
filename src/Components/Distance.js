import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from 'framer-motion';

function Distance() {

    const [ distance, setDistance ] = useState({
        feet: 0, meters: 0, miles: 0
    })

    const changeMeters = e => setDistance({
        meters: e.target.value,
        feet: (+e.target.value * 3.28).toFixed(2),
        miles: (+e.target.value * 3.28 / 5280).toFixed(2)
    })

    const changeFeet = e => setDistance({
        meters: (+e.target.value * 0.305).toFixed(2),
        feet: e.target.value,
        miles: (e.target.value / 5280).toFixed(2)
    })

    const changeMiles = e => setDistance({
        meters: (+e.target.value * 5280 * 0.305).toFixed(2),
        feet: (+e.target.value * 5280).toFixed(2),
        miles: e.target.value
    })

    return (
    
        <div className="distance">
            <motion.div
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }}
                exit={{opacity: 0}}
                transition={{ duration: 0.5 }} className='parent' style={{ color: "black"}}
            > 
                <h3>Distance</h3>
                <h4>Distance in Meters:</h4> 
                <input type="number" value={distance.meters} onChange = {changeMeters}></input>

                <h4>Distance in Feet:</h4>
                <input type="number" value={distance.feet} onChange = {changeFeet}></input>

                <h4>Distance in Miles:</h4> 
                <input type="number" value={distance.miles} onChange = {changeMiles}></input>
            </motion.div>
        </div>
        
    )
}
export default Distance;