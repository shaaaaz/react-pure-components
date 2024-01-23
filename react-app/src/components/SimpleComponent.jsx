import React, { Component } from 'react'

export default class SimpleComponent extends Component {

    constructor() {
        super()
        this.state = {
            toggle: false,
            count: 0,
        }
    }

    handleToggle = () => {
        this.setState({
            toggle : !this.state.toggle
          })
    }

    handleCounter = () => {
        if (this.state.toggle) {
            this.setState({
                count: this.state.count + 1
            })
        }
        else{
            this.setState({
                count: this.state.count 
            })
        }
    }

    render() {
        console.log("This is Simple Component")
        return (
            <>
                <h1>Simple Component</h1>

                <h2>{this.state.count}</h2>

                <div className='flex'>
                    <button onClick={this.handleToggle} className={`${this.state.toggle == true ? `toggleGreen` : `toggleRed`}`}>
                        Toggle
                    </button>

                    <button onClick={this.handleCounter}>
                        Counter
                    </button>
                </div>
            </>
        )
    }
}
