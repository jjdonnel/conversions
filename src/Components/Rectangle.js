import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from 'framer-motion';

function Rectangle() {

    const [ rectangle, setRectangle ] = useState({
        height: null, width: null
    })
    
   const changeArea = (e) => {

    let name = e.target.name;
    let value = e.target.value;

    const newValues = {
        ...rectangle,
        [name]: value
    }
    setRectangle(newValues);

    calcArea(newValues)
   }

   const [ area, setArea ] = useState(null)

   const calcArea = (newValues) => {
    const { height, width } = newValues;
    const newArea = parseFloat(height) * parseFloat(width)
    setArea(newArea)
   }
    // })

    return (
        <div className="length">
            <motion.div
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }}
                exit={{opacity: 0}}
                transition={{ duration: 0.5 }} className='parent' style={{ color: "black"}}
            > 
                <h3>Rectangle</h3>
                <h4>Rectangle Height:</h4> 
                <input type="number" name='height' value={rectangle.height} onChange={changeArea}></input>

                <h4>Rectangle Width:</h4>
                <input type="number" name='width' value={rectangle.width} onChange={changeArea}></input>

                <h4>Rectangle Area: </h4>
                <h4>{area}</h4>
                
            </motion.div>
        </div>
    )
}

export default Rectangle;