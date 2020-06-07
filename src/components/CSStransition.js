import React, { Component } from 'react';

import '../css/App.css';
import { CSSTransition } from 'react-transition-group';

class Fade extends Component{
    state = {
        show: true
    }
    showDiv = () => {
        this.setState({
            show: !this.state.show ? true : false
        })
    }
    render(){
        return(
            <>
            <CSSTransition in={this.state.show} timeout={1000} classNames="square">
                <div className={'square '}>
                    Hello
                </div>
            </CSSTransition>
            <button className="showDiv" onClick={this.showDiv}>Show/Hide</button>
            </>

            
        )
    }
}


export default Fade;