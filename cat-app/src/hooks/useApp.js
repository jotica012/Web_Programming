import { useEffect, useState } from 'react'
import { fetchFact } from '../services/FactsFetch'
import { fetchImg } from '../services/ImgFetch'

export const useApp = () => {
    const [fact, setFact] = useState('')
    const [img, setImg] = useState('')
    const [isLoading, setLoading] = useState(false)
    const [words, setWords] = useState(null)
    const [error, setError] = useState(null)

    const handleUserSubmit = () => {
        getFacts()
    }

    const getFacts = () => {
        setLoading (true)

        fetchFact()
        .then((fact) => {
            setFact (fact)
            if (fact) {
                const wordsArray = fact.split(' ').slice(0, 4)
                setWords(wordsArray.join(' '))
            }
        })
        .catch((error) => {
            setError(error)
        })
    }

    useEffect(() => {
        getFacts()
    }, [])

    const fetchImage = () => {
        if (words) {
            fetchImg( words )
            .then ((img)=> {
                setImg(img)
            })
            .catch((error)=> {
                setError(error)
            })
            .finally(()=> setLoading(false))
        }
    }

    useEffect(()=> {
        fetchImage()
    }, [words])

    return {
        handleUserSubmit,
        fact,
        img, 
        isLoading,
        error, 
        words
    }
}