import React, { useState } from "react";
import { motion } from 'framer-motion';
import Info from "./Info";

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

    const [units, setUnits] = useState('in');

    return (
        <div className="circle">
            <motion.div
                initial={{ opacity: 0 }} 
                animate={{ opacity: 1 }}
                exit={{opacity: 0}}
                transition={{ duration: 0.5 }} className='parent' style={{ color: "black"}}
            > 
                <h3>Circle Measure</h3>
                <h4>Radius:</h4> 
                
                <select onChange={(event)=> setUnits(event.target.value)} value={units}>
                    <option value='in'>in</option>
                    <option value='ft'>ft</option>
                    <option value='cm'>cm</option>
                    <option value='m'>m</option>
                </select>

                <input type="number" value={circle.r} onChange = {changeR}></input><span className="units"> {units}</span>

                <h4>Circumference:</h4> 
                <input type="number" value={circle.c} onChange = {changeC}></input><span className="units"> {units}</span>

                <h4>Area:</h4> 
                <input type="number" value={circle.a} onChange = {changeA}></input><span className="units"> {units}<sup>2</sup></span>

                <h4>Volume:</h4> 
                <input type="number" value={circle.v} onChange = {changeV}></input><span className="units"> {units}<sup>3</sup></span> 
                
                <Info>
                    <p>C = 2 &pi; r</p>
                    <p>A = &pi; r<sup>2</sup></p>
                    <p>V = 4/3 &pi; r<sup>3</sup></p>
                </Info>

            </motion.div>
        </div>
    )
}
export default Circle;