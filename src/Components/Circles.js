import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from 'framer-motion';

function Circle() {

    const [ circle, setCircle ] = useState({
        r: 0, c: 0, a: 0, v: 0
    })

    const changeR = e => setCircle({
        r: e.target.value,
        c: (+e.target.value * 2 * 3.14).toFixed(2),
        a: ((+e.target.value)**2 * 3.14).toFixed(2),
        v: ((+e.target.value)**3 *  3.14 * 4 / 3).toFixed(2)
    })

    const changeC = e => setCircle({
        r: (+e.target.value / 3.14 / 2).toFixed(2),
        c: e.target.value,
        a: ((+e.target.value / 3.14 / 2)**2 * 3.14).toFixed(2),
        v: ((+e.target.value / 3.14 / 2)**3 *  3.14 * 4 / 3).toFixed(2)
    })

    const changeA = e => setCircle({
        r: ((+e.target.value / 3.14)**(1/2)).toFixed(2),
        c: ((+e.target.value / 3.14)**(1/2) * 2 * 3.14).toFixed(2),
        a: e.target.value,
        v: ((+e.target.value / 3.14)**(3/2) * 3.14 * 4 / 3).toFixed(2)
    })

    const changeV = e => setCircle({
        r: ((+e.target.value * 3 / 4 / 3.14)**(1/3)).toFixed(2),
        c: ((+e.target.value * 3 / 4 / 3.14)**(1/3) * 2 * 3.14).toFixed(2),
        a: ((+e.target.value * 3 / 4 / 3.14)**(2/3) * 3.14).toFixed(2),
        v: e.target.value
    })

    return (
        <div className="distance">
            <motion.div
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }}
                exit={{opacity: 0}}
                transition={{ duration: 0.5 }} className='parent' style={{ color: "black"}}
            > 
                <h3>Circle Measure</h3>
                <h4>Radius:</h4> 
                <input type="number" value={circle.r} onChange = {changeR}></input>

                <h4>Circumference:</h4> 
                <input type="number" value={circle.c} onChange = {changeC}></input>

                <h4>Area:</h4> 
                <input type="number" value={circle.a} onChange = {changeA}></input>

                <h4>Volume:</h4> 
                <input type="number" value={circle.v} onChange = {changeV}></input>
            </motion.div>
        </div>
    )
}
export default Circle;