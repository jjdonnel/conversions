import React, { useState } from "react";
import { motion } from 'framer-motion';

function Distance() {

    const [ distance, setDistance ] = useState({
        inches: '', feet: '', centimeters: '', meters: '', miles: '', nautMiles: ''
    })

    const changeInches = e => setDistance({
        inches: e.target.value,
        meters: (+e.target.value / 39.37).toFixed(2),
        centimeters: (+e.target.value / 0.3937).toFixed(2),
        feet: (+e.target.value / 12).toFixed(2),
        miles: (+e.target.value / 63360).toFixed(2),
        nautMiles: (+e.target.value / 72193.4).toFixed(2)
    })

    const changeMeters = e => setDistance({
        inches: (+e.target.value * 39.37).toFixed(2),
        meters: e.target.value,
        centimeters: (+e.target.value * 100).toFixed(2),
        feet: (+e.target.value * 3.28).toFixed(2),
        miles: (+e.target.value * 3.28 / 5280).toFixed(2),
        nautMiles: (+e.target.value * 3.28 / 5280 / 0.869).toFixed(2)
    })

    const changeCentimeters = e => setDistance({
        inches: (+e.target.value * 0.3937).toFixed(2),
        meters: (+e.target.value / 100).toFixed(2),
        centimeters: e.target.value,
        feet: (+e.target.value * 0.0328).toFixed(2),
        miles: (+e.target.value * 0.0328 / 5280).toFixed(2),
        nautMiles: (+e.target.value * 0.0328 / 5280 / 0.869).toFixed(2)
    })

    const changeFeet = e => setDistance({
        inches: (+e.target.value * 12).toFixed(2),
        meters: (+e.target.value * 0.305).toFixed(2),
        centimeters: (+e.target.value * 30.5).toFixed(2),
        feet: e.target.value,
        miles: (e.target.value / 5280).toFixed(2),
        nautMiles: (+e.target.value / 5280 / 0.869).toFixed(2)
    })

    const changeMiles = e => setDistance({
        inches: (+e.target.value * 63360).toFixed(2),
        meters: (+e.target.value * 5280 * 0.305).toFixed(2),
        cemtimeters: (+e.target.value * 5280 * 30.5).toFixed(2),
        feet: (+e.target.value * 5280).toFixed(2),
        miles: e.target.value,
        nautMiles: (+e.target.value * 0.869).toFixed(2)
    })

    const changeNautMiles = e => setDistance({
        inches: (+e.target.value * 72193.4).toFixed(2),
        meters: (+e.target.value * 5280 * 1.151 * 0.305).toFixed(2),
        centimeters: (+e.target.value * 5280 * 30.5).toFixed(2),
        feet: (+e.target.value * 1.151 * 5280).toFixed(2),
        miles: (+e.target.value * 1.151).toFixed(2),
        nautMiles: e.target.value 
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

                <h4>Distance in Inches:</h4> 
                <input type="number" value={distance.inches} onChange = {changeInches}></input>
                
                <h4>Distance in Meters:</h4> 
                <input type="number" value={distance.meters} onChange = {changeMeters}></input>

                <h4>Distance in Centimeters:</h4> 
                <input type="number" value={distance.centimeters} onChange = {changeCentimeters}></input>

                <h4>Distance in Feet:</h4>
                <input type="number" value={distance.feet} onChange = {changeFeet}></input>

                <h4>Distance in Miles:</h4> 
                <input type="number" value={distance.miles} onChange = {changeMiles}></input>

                <h4>Distance in  Nautical Miles:</h4> 
                <input type="number" value={distance.nautMiles} onChange = {changeNautMiles}></input>

            </motion.div>
        </div>
        
    )
}
export default Distance;