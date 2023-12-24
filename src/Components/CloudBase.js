import React, { useState } from "react";
import { motion } from 'framer-motion';
import Info from "./info";

function CloudBase() {

    const [ values, setValues ] = useState({
        temp: 0, dewPt: 0
    })
    
   const changeBase = (e) => {

    let name = e.target.name;
    let value = e.target.value;

    const newValues = {
        ...values,
        [name]: value
    }
    setValues(newValues);

    calcBase(newValues)
   }

   const [ base, setBase ] = useState(null)

if (isNaN(base)) setBase(0)

let [units, setUnits] = useState('F');

   const calcBase = (newValues) => {
    const { temp, dewPt } = newValues;
    const newBaseF = (parseFloat(temp) - parseFloat(dewPt)) * 220;
    const newBaseC = (parseFloat(temp) - parseFloat(dewPt)) * 440;
    if (units === 'F') {
        setBase(newBaseF);
     };

     if (units === 'C') {
        setBase(newBaseC);
     }
   }

    return (
        <div className="rectangle">
            <motion.div
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }}
                exit={{opacity: 0}}
                transition={{ duration: 0.5 }} className='parent' style={{ color: "black"}}
            > 
                <h3>Cloud Base</h3>
                <h4>Temperature:</h4> 

                <select onChange={(event)=> setUnits(event.target.value)} value={units}>
                    <option value='F'>F</option>
                    <option value='C'>C</option>
                </select>

                <input type="number" name='temp' value={values.temp} onChange={changeBase}></input><span className="units"> {units}</span>

                <h4>Dew Point:</h4>
                <input type="number" name='dewPt' value={values.dewPt} onChange={changeBase}></input><span className="units"> {units}</span>

                <h4>Cloud Base: </h4>
                <h4>{base} <span className="units"> ft</span></h4>

                <Info>
                    <p>Approximate cloud bottom height based on Temperature and Dewpoint difference.</p>
                </Info>
                
            </motion.div>
        </div>
    )
}

export default CloudBase;