import React from 'react'


const Scroll = props => {
    return <div className={{ overflow: 'scroll', height: '800px', border: 'solid 1px black' }}>{props.children}</div>
}

export default Scroll