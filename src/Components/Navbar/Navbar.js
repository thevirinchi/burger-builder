import React, {Component} from 'react';
import NavbarItem from '../NavbarItem/NavbarItem';

class Navbar extends Component{

    render(){
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                <div className="container">
                    <a className="navbar-brand dis-flex all-center" href="/">
                        <img src={this.props.logo} className="App-logo d-inline-block align-top" alt="" loading="lazy"/>
                        <h5 className="App-logo-text mb-0">Burger Builder</h5>
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ml-auto">
                            {
                                this.props.items.map((items) => {
                                    return (<NavbarItem name={items.name} target={items.target} id={items.id} active={items.active} key={items.id}/>)
                                })
                            }
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Navbar;