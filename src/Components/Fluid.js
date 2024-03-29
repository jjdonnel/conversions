import React, { useState } from "react";
import { motion } from 'framer-motion';

function Fluid() {

    const [ fluid, setFluid ] = useState({
        cc: '', oz: '', qt: '', lt: ''
    })

    const changeCc = e => setFluid({
        cc: e.target.value,
        oz: (+e.target.value * 0.034).toFixed(2),
        qt: (+e.target.value * 0.034 / 32).toFixed(2),
        lt: (+e.target.value / 1000).toFixed(2)
    })

    const changeOz = e => setFluid({
        cc: (+e.target.value * 29.57).toFixed(2),
        oz: e.target.value,
        qt: (+e.target.value / 32).toFixed(2),
        lt: (+e.target.value * 29.57 / 1000).toFixed(2)
    })

    const changeQt = e => setFluid({
        cc: (+e.target.value * 32 * 29.57).toFixed(2),
        oz: (+e.target.value * 32).toFixed(2),
        qt: e.target.value,
        lt: (+e.target.value * 32 * 29.57 / 1000).toFixed(2)
    })

    const changeLt = e => setFluid({
        cc: (+e.target.value * 1000).toFixed(2),
        oz: (+e.target.value * 1000 / 29.57).toFixed(2),
        qt: (+e.target.value * 1000 / 29.57 / 32).toFixed(2),
        lt: e.target.value 
    })

    return (
        <div className="fluid">
            <motion.div
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }}
                exit={{opacity: 0}}
                transition={{ duration: 0.5 }} className='parent' style={{ color: "black"}}
            > 
                <h3>Fluid</h3>
                <h4>Fluid in milliliters:</h4> 
                <input type="number" value={fluid.cc} onChange = {changeCc}></input>

                <h4>Fluid in liters:</h4>
                <input type="number" value={fluid.lt} onChange = {changeLt}></input>

                <h4>Fluid in ounces:</h4> 
                <input type="number" value={fluid.oz} onChange = {changeOz}></input>

                <h4>Fluid in quarts:</h4> 
                <input type="number" value={fluid.qt} onChange = {changeQt}></input>
            </motion.div>
        </div>
    )
}
export default Fluid;