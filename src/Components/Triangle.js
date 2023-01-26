import React, { useState } from "react";
import { motion } from 'framer-motion';

function Triangle() {

        const [ triangle, setTriangle ] = useState({
            height: '', width: ''
        })
        
       const changeArea = (e) => {
    
        let name = e.target.name;
        let value = e.target.value;
    
        const newValues = {
            ...triangle,
            [name]: value
        }
        setTriangle(newValues);
    
        calcArea(newValues)
       }
    
       const [ area, setArea ] = useState('')
    
       const calcArea = (newValues) => {
        const { height, width } = newValues;
        const newArea = ( parseFloat(height) * parseFloat(width) ) / 2
        setArea(newArea)
       }
        // })
    
        return (
            <div className="triangle">
                <motion.div
                    initial={{ opacity: 0 }} 
                    animate={{ opacity: 1 }}
                    exit={{opacity: 0}}
                    transition={{ duration: 0.5 }} className='parent' style={{ color: "black"}}
                > 
                    <h3>Triangle</h3>
                    <h4>Triangle Height:</h4> 
                    <input type="number" name='height' value={triangle.height} onChange={changeArea}></input>
    
                    <h4>Triangle Width:</h4>
                    <input type="number" name='width' value={triangle.width} onChange={changeArea}></input>
    
                    <h4>Triangle Area: </h4>
                    <h4>{area}</h4>
                    
                </motion.div>
            </div>
        )
    }

export default Triangle;