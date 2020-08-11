import React, {Component, Fragment} from 'react';
import Burger from '../../Components/Burger/Burger';
import BuildControls from '../../Components/Burger/BuildControls/BuildControls';

const INGRIDIENT_PRICES = {
    cheese: 10,
    salad: 15
}

class BurgerBuilder extends Component{

    state = {
        ingridients: {
            cheese: 0,
            salad:0
        },
        total: 20
    }


    addIngHandler = (type) =>{
        const old = this.state.ingridients[type];
        let upd = 0;
        if(old+1 <= 10){
            upd = old+1;
            const updIng = {...this.state.ingridients};
            updIng[type] = upd;
            this.setState({total: this.state.total + INGRIDIENT_PRICES[type], ingridients: updIng});
        }
    }

    remIngHandler = (type) =>{
        const old = this.state.ingridients[type];
        let upd = 0;
        if(old-1 >= 0){
            upd = old-1;
            const updIng = {...this.state.ingridients};
            updIng[type] = upd;
            this.setState({total: this.state.total - INGRIDIENT_PRICES[type], ingridients: updIng});
        }
    }

    render(){
        return(
            <Fragment>
                <div className=" dis-flex flex-col container-fluid pt-5 mt-5 all-center">
                    <div className="container">
                        <Burger ingridients={this.state.ingridients}/>
                        <BuildControls add={this.addIngHandler} remove={this.remIngHandler} cheese={this.state.ingridients.cheese} salad={this.state.ingridients.salad} total={this.state.total}/>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default BurgerBuilder;