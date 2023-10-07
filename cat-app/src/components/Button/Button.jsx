import React from 'react'
import './button.css'

export function Button ({ handleUserSubmit }) {
    return (
        <button onClick={handleUserSubmit}> Get me a new Cat Fact</button>
    )
}