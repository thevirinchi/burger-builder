import React from 'react';
import classes from './burger.module.css';
import Ingridients from './Ingridients/Ingridients';

const Burger = (props) =>{

    let transIngrid = Object.keys(props.ingridients).map(igKey=>{
        return [...Array(props.ingridients[igKey])].map((_, i) => {
            return <Ingridients key={igKey + i} type={igKey}/>;
        })
    }).reduce((arr, el)=>{
        return arr.concat(el)
    }, []);

    if(transIngrid.length === 0){
        transIngrid = <div className="alert alert-warning">Please start adding some ingridients</div>
    }

    return (
        <div className={classes.burger}>
            <Ingridients type="bread-top"/>
            {transIngrid}
            <Ingridients type="bread-bottom"/>
        </div>
    );
}

export default Burger;