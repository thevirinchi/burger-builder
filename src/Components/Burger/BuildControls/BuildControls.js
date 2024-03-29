import React from 'react';
import BuildControl from './BuildControl/BuildControl';

const BuildControls = (props) =>{

    const controls = [
        { label: 'Cheese', type: 'cheese', count: props.cheese},
        { label: 'Salad', type: 'salad', count: props.salad}
    ];

    return(
        <div className="dis-flex flex-col all-center h-45">
            {controls.map(ctrl=>(
                <BuildControl add={()=>props.add(ctrl.type)} remove={()=>props.remove(ctrl.type)} label={ctrl.label} type={ctrl.type} count={ctrl.count} key={ctrl.type}/>
            ))}
            <div className="container card shadow-sm w-75 mt-5 p-4 dis-fflex flex-col all-center">
                Your total is: <br/><span><h3 className="mb-0">{props.total}</h3></span>
                <button className="btn btn-success mt-4">ORDER NOW</button>
            </div>
        </div>
    );
}

export default BuildControls;