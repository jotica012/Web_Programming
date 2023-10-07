import React from 'react'
import './App.css'
import { Header, ImgApi, FactApi, Button } from './components'
import { useApp } from './hooks/useApp.js'

export function App () {
    const { handleUserSubmit, fact, img, isLoading, error, words } = useApp()
    console.log(words)

   /* if (isLoading) {
        return (
            <>
                <Header/>
                <p> Puuurfect Cat Fact Loading</p>
            </>
        )
    }
    if (error) {
        return (
            <p>(error)</p>
        )
    }*/

    return (
        <>
        <Header />
        <main>
            <ImgApi
            content = {img}
            />
            <FactApi
            text={fact}
            />

            <Button 
            onClick={handleUserSubmit} />
        </main>
        </>
    )
}