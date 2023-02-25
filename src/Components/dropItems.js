import { useState } from 'react';
import { Link } from 'react-router-dom';
import Arrow from './Arrow';

function DropItems({option}) {
    const [energy, setEnergy] = useState(false);
    const [ isToggled, setIsToggled ] = useState(false);
  
    if (option.children) {
    return (
      <div className='drop' style={{textAlign: 'left'}} onClick={(e) => { setEnergy(!energy); }}
    //   className={ energy ? "dropItem open" : "dropItem" }
      
      >
        {/* <a href={option.path}></a> */}
        <div className="title" >
          <span>{option.title}</span>
          <div className="arrow" >
            <Arrow className={ energy ? "arrow_icon" : "arrow_icon rotate" } width={15} />
          </div>
        </div>
        <div className='submenu' style={energy ? 
                  {height: 'auto', opacity: '1', transition: 'all 0.2s ease'} :
                  {height: '0px', opacity: '0', transition: '0.2s ease'}}>
        {option.children.map((child, index2) => <DropItems key={index2} option={child} />
        )}
        </div>
      </div>
    )
  } else {
      return (
        <div className='drop' style={{textAlign: 'left'}} onClick={(e) => { setIsToggled(!isToggled); }}>
          <Link to={option.path}>{option.title}</Link>
        </div>
      );
    }
  }
export default DropItems;

