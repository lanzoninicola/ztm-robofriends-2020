import React, { Component, Fragment } from 'react'
import CardList from '../components/CardList'
//import { robots } from './robots'
import SearchBox from '../components/SearchBox'
import Scroll from '../components/Scroll'
import ErrorBoundary from '../components/ErrorBoundary'
import { connect } from 'react-redux';

import { setSearchField, fetchRobots } from '../actions'

class App extends Component {

    componentDidMount() {
        this.props.fetchRobots();
    }

    render() {

        const { onSearchChange, searchValue, robots, isPending, error } = this.props;

        const robotsFiltered = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchValue.toLowerCase())
        }
        )

        return isPending ? <h1>Loading....</h1>
            : (
                <Fragment>
                    <header className='tc bg-green ma0 pa2'>
                        <h1 className='f1 helvetica white'>ROBOFRIENDS</h1>
                        <SearchBox onSearchChange={onSearchChange} />
                    </header>
                    <section id="robotsSection" className='bg-green' style={{ height: '100vh' }}>
                        <Scroll>
                            <ErrorBoundary>
                                <CardList robots={robotsFiltered} />
                            </ErrorBoundary>
                        </Scroll>
                    </section>
                </Fragment>
            )
    }

}

const mapStateToProps = state => {
    console.log('mapStateToProps - ', state)
    return {
        searchValue: state.setSearchField.searchValue,
        robots: state.robotsState.robots,
        isPending: state.robotsState.isPending,
        error: state.robotsState.error

    }

}

const mapDispatchToProps = (dispatch) => {
    return {
        onSearchChange: event => dispatch(setSearchField(event.target.value)),
        fetchRobots: () => dispatch(fetchRobots())
    }
}


// const mapDispatchToProps = {
//     onSearchChange: event => setSearchField(event.target.value),
//     fetchRobots: dispatch => dispatch(fetchRobots())
// }


export default connect(mapStateToProps, mapDispatchToProps)(App)