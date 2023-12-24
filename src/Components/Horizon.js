import React, { useState } from "react";
import { motion } from 'framer-motion';
import Info from "./info";

function Horizon() {

    const [ height, setHeight ] = useState({sight: ''})
    
   const changeDistance = (e) => {

    let name = e.target.name;
    let value = e.target.value;

    const newValues = {
        ...height,
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
    if (units === 'feet') {
        setBase(newBaseF);
     };

     if (units === 'meters') {
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
                <h4>Height:</h4> 

                <select onChange={(event)=> {setUnits(event.target.value); calcBase(values)}} value={units}>
                    <option value='ft'>feet</option>
                    <option value='m'>meters</option>
                </select>

                <input type="number" name='sight' value={values.sight} onChange={changeDistance}></input><span className="units"> {units}</span>

                <h4>Horizon Distance: </h4>
                <h4>{distance} <span className="units"> ft</span></h4>

                <Info>
                    <p>Distance to Horizon based on viewer's height.</p>
                </Info>
                
            </motion.div>
        </div>
    )
}

export default CloudBase;