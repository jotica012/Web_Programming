import React from 'react'
import './imgapi.css'

export function ImgApi ({ content }) {
    return (
        <div className='img-container'>
            <img src= {content} alt = 'Cat-image' />
        </div>
    )
}