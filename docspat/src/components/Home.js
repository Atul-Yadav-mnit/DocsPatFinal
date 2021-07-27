import React from 'react'
import IndexHeader from './IndexHeader'

function Home({testimonials}) {
    return (
        <div>
            <IndexHeader testimonials={testimonials}/>
        </div>
    )
}

export default Home
