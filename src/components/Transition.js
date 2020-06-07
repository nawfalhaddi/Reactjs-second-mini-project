import React, { Component } from 'react';
import { Transition } from 'react-transition-group'
import '../css/App.css';

class TransitionComp extends Component {
    state = {
        show: true
    }
    showDiv = () => {
        this.setState({
            show: !this.state.show ? true : false
        })
    }
    render() {
        return (
            <>
                <Transition in={this.state.show} timeout={1000}  mountOnEnter
                //enter={false}
                //exit={false}
                onEnter={()=>{
                    console.log("Enter")
                }}
                onExit={
                    ()=>{console.log("exit")}
                }>
                    {state => (
                        <div className={"square square-"+state}>
                            square-{state}
                        </div>
                    )}
                </Transition>

                <button className="showDiv" onClick={this.showDiv}>Show/Hide</button>

            </>

        )
    }
}


export default TransitionComp;