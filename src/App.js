import React, { Component, Fragment } from 'react'
import CardList from './CardList'
//import { robots } from './robots'
import SearchBox from './SearchBox'
import Scroll from './Scroll'
import ErrorBoundry from './ErrorBoundry'


class App extends Component {
    constructor() {
        super()
        this.state = {
            robots: [],
            searchValue: ''
        }
    }

    onSearchChange = (event) => {
        this.setState({ searchValue: event.target.value })
    }

    async componentDidMount() {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
        const json = await response.json();

        this.setState({ robots: json });
    }

    render() {

        const robotsFiltered = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchValue.toLowerCase())
        }
        )

        return !this.state.robots ? <h1>Loading....</h1>
            : (
                <Fragment>
                    <header className='tc bg-green ma0 pa2'>
                        <h1 className='f1 helvetica white'>ROBOFRIENDS</h1>
                        <SearchBox onSearchChange={this.onSearchChange} />
                    </header>
                    <section>
                        <Scroll>
                            <ErrorBoundry>
                                <CardList robots={robotsFiltered} />
                            </ErrorBoundry>
                        </Scroll>
                    </section>
                </Fragment>
            )
    }

}

export default App