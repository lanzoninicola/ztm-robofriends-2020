import React, { Component } from 'react';


class CounterButton extends Component {
    constructor(props) {
        super(props)

        this.state = {
            counter: 0
        }
    }

    increaseCount = () => {
        this.setState((prevState) => ({
            counter: prevState.counter + 1
        }));
    }

    render() {
        return (
            <button
                className='center w-10 mb2'
                onClick={this.increaseCount}
            >Counter: {this.state.counter}</button>
        )
    }
}

export default CounterButton;