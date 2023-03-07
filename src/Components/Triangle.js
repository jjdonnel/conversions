import React, { useState } from "react";
import { motion } from 'framer-motion';
import Info from "./Info";

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
    
        calcArea(newValues); 

        calcVolume(newValues);

       }
    
       const [ area, setArea ] = useState(null)

       if (isNaN(area)) setArea(0)
    
       const calcArea = (newValues) => {
        const { height, width } = newValues;
        const newArea = ( parseFloat(height) * parseFloat(width) ) / 2
        setArea(newArea)
       }

       const [ volume, setVolume ] = useState(null)

       if (isNaN(volume)) setVolume(0)

       const calcVolume = (newValues) => {
        const { height, width } = newValues;
        const newVolume = ( ((1/3) * 3.1412 * parseFloat(height) * parseFloat(width ** 2) )).toFixed(2)
        setVolume(newVolume)
       }
        // })

        const [units, setUnits] = useState('in');
    
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

                    <select onChange={(event)=> setUnits(event.target.value)} value={units}>
                        <option value='in'>in</option>
                        <option value='ft'>ft</option>
                        <option value='cm'>cm</option>
                        <option value='m'>m</option>
                    </select>

                    <input type="number" name='height' value={triangle.height} onChange={changeArea}></input><span className="units"> {units}</span>
    
                    <h4>Triangle Width:</h4>
                    <input type="number" name='width' value={triangle.width} onChange={changeArea}></input><span className="units"> {units}</span>
    
                    <h4>Triangle Area: </h4>
                    <h4>{area} <span className="units"> {units}<sup>2</sup></span></h4>

                    <h4>Conic Volume: </h4>
                    <h4>{volume} <span className="units"> {units}<sup>3</sup></span></h4>
                    
                    <Info>
                        <p>A = Height * Width/2</p>
                        <p>V = 1/3 &pi; * width<sup>2</sup> * Height </p>
                    </Info>

                </motion.div>
            </div>
        )
    }

export default Triangle;