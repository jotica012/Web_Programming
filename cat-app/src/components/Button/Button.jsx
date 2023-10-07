import React from 'react'
import './button.css'

export function Button ({ onClick }) {
    return (
        <button onClick={onClick}> Get me a new Cat Fact</button>
    )
}