import { FC } from 'react'
import { useLocation } from 'wouter'
import { Heroes } from '../interfaces'

interface HeroesItemProps {
    heroesProps: Heroes
}

export const HeroesItem: FC<HeroesItemProps> = ({ heroes }) => {
    const { hero, img } = heroes
    const [, setLocation] = useLocation()

    const containerClass = 'flex items-center gap-3 bg-blue-700 w-40 rounded-md hover:bg-blue-800 cursor-pointer p-3 transition ease-in-out delay-150 hover:translate-y-1 hover:scale-110 duration-300'

    return (
        <div 
            className={containerClass}
            onClick={() => setLocation(`/heroes/${hero}`)}
        >
            <img src={img} className='h-12' alt={hero} loading='lazy' />
            <p className='text-gray-100 overflow-hidden whitespace-nowrap text-ellipsis font-mono text-lg'>
                {hero}
            </p>
        </div>
    )
}