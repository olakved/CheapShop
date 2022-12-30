import React, { useState, useEffect } from 'react'
import FaqCard from './faq';
import './style.css'


function PersonPage() {
    const [people, setPeople] = useState();

    useEffect(() => {
        const controller = new AbortController()
        const signal = controller.signal
        const fetchDataA = async () => {
            const data = await( await fetch('https://dummyjson.com/users', {signal})).json()
            setPeople(data?.users)
        }

        
        fetchDataA()

        return() => (
            controller.abort()
        )
    }, [])

    

    return (
        <div className='cardwrap'>
            <div className='cardbox'>
                {people?.slice(0, 4).map((person) => (
                    <div key={person?.id} >
                        <FaqCard person={person}/>
                    </div>
                ))}
            </div>

        </div>
    )
}

export default PersonPage