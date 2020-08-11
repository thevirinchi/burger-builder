import React, {Component} from 'react';
import PropTypes from 'prop-types';
import classes from './ingridients.module.css';

class Ingridients extends Component{
    render(){
        let ingridient = null;
        switch(this.props.type){
            case ('bread-bottom'):
                ingridient = <div className={classes.BreadBottom}></div>
                break;
            case ('bread-top'):
                ingridient = (<div className={classes.BreadTop}>
                                <div className={classes.Seeds1}></div>
                                <div className={classes.Seeds2}></div>
                            </div>);
                break;
            case ('cheese'):
                ingridient = <div className={classes.Cheese}></div>
                break;
            case ('salad'):
                ingridient = <div className={classes.Salad}></div>
                break;
            default:
                console.log("Error: Invalid ingridient detected: " + this.props.type);
                ingridient = null;
        }

        return ingridient;
    }
};

Ingridients.propTypes = {
    type: PropTypes.string.isRequired
}

export default Ingridients;