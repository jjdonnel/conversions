import React, { useState, useEffect } from "react";

function Pressure() {

    const [ pressure, setPressure ] = useState({
        inHg: 0, Mb: 0, Psi: 0
    })

    const changeHg = e => setPressure({
        inHg: e.target.value,
        Mb: (+e.target.value * 33.86).toFixed(2),
        Psi: (+e.target.value * 0.49).toFixed(2)
    })

    const changeMb = e => setPressure({
        inHg: (+e.target.value * 0.03).toFixed(2),
        Mb: e.target.value,
        Psi: (+e.target.value * 0.0145).toFixed(2)
    })

    const changePsi = e => setPressure({
        inHg: (+e.target.value * 2.04).toFixed(2),
        Mb: (+e.target.value * 68.95).toFixed(2),
        Psi: e.target.value
    })

    return (
        <div className="length">
            <h3>Pressure</h3>
                    <h4>Inches of Mercury:</h4> 
                    <input type="number" value={pressure.inHg} onChange = {changeHg}></input>

                    <h4>Millibars:</h4>
                    <input type="number" value={pressure.Mb} onChange = {changeMb}></input>

                    <h4>Psi:</h4>
                    <input type="number" value={pressure.Psi} onChange = {changePsi}></input>
        </div>
    )
}
export default Pressure;