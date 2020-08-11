import React from 'react';

const BuildControl = (props) =>{
    return (
        <div className="dis-flex all-center">
            <button className="btn btn-danger w-50" onClick={props.remove}>-</button><div className="mx-3 h5 w-200 my-3" type={props.type}>{props.label}: {props.count} (Serves)</div><button className="btn btn-success w-50" onClick={props.add}>+</button>
        </div>
    );
}

export default BuildControl;