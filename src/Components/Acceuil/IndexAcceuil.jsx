import React from 'react'
import Block from './Block/Block'
import CLubs from './Clubs/Clubs'
import Main from './Main/Main'
import Performance from './Performance/Performance'
import Sliders from './Sliders/Sliders'
import Solution from './Solution/Solution'

const IndexAcceuil = () => {
    return (
        <div>
            <Main />
            <Performance />
            <Sliders />
            <Solution />
            <Block />
            <CLubs />
        </div>
    )
}

export default IndexAcceuil