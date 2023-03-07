import React, { useState, useRef } from "react";
import Arrow from "./Arrow";
import '../App.css';

const Info = (props) => {
    const [info, setInfo] = useState(false);
    const infoRef = useRef();
    return (
        <div className='info' onClick={ () => setInfo(!info) }>
            <div className='infoBtn'>
            <Arrow className={info ? 'arrow' : 'arrow up'} width={15} padding={'5'} fill={'#fff'} />
                <p style={info ? {fontSize: '20px', marginLeft: '0.5em'} : {fontSize: '20px', marginLeft: '0.5em'}} >
                   { info ? 'Close' : 'Info' }
                </p>
            </div>
            <div className='infoContent' ref={infoRef} 
                style={ info ? {height: infoRef.current.scrollHeight + 'px', transform: `scale(1)`, opacity: '1', transition: 'all 0.5s'} : { height: '0px', transform: `scale(0)`, opacity: '0', transition: 'all 0.5s'}}>
                { props.children }
            </div>
        </div>
        
    )

}

export default Info;