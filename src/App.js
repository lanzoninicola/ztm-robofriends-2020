import React, { Component, Fragment } from 'react'
import CardList from './CardList'
import { robots } from './robots'
import SearchBox from './SearchBox'


class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: robots,
            searchValue: ''
        }
    }

    onSearchChange = (event) => {
        this.setState({ searchValue: event.target.value })
    }

    render() {

        const robotsFiltered = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchValue.toLowerCase())
        }
        )


        return (
            <Fragment>
                <header className='tc bg-green ma0 pa2'>
                    <h1 className='f1 helvetica white'>ROBOFRIENDS</h1>
                    <SearchBox onSearchChange={this.onSearchChange} />
                </header>
                <section>
                    <CardList robots={robotsFiltered} />
                </section>
            </Fragment>
        )
    }

}

export default App