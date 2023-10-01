import { useEffect, useState } from 'react'
import { Heroes } from '../interfaces'
import data from '../data/heroes.json'

export const useHeroes = () => {
    const [heroes, setHeroes] = useState<Heroes[]>([])
    const [loading, setLoading] = useState<boolean>(true)

    const getHeroesByName = (nameHeroes: string) => {
        return heroes.find(data => data.hero === nameHeroes) ?? ({} as Heroes)
    }

    useEffect(() => {
        setTimeout(() => {
            setHeroes(data)
            setLoading(false)
        }, 300)
    }, [])

    return {
        heroes,
        loading,
        getHeroesByName
    }
}