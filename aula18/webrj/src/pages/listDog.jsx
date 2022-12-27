import React, { useEffect, useState } from 'react'
import DogCard from '../components/dogCard'
import { getAllDogs } from '../services/dogService'

const ListDog = () => {

    const [dogs, setDog] = useState([])

    const initialize = async () => {
        try {
            const result = await getAllDogs()
            setDog(result)
        } catch (error) {
            alert(error)
        }
    }

    useEffect(() => {
        initialize()
    }, [])

    return (
        <div className='mx-5 mt-5'>
            <h1>Our Dogs</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 overflow-y-scroll h-[560px] w-full pb-10' >
                {dogs.map((dog, index) => {
                    return (
                        <div key={index} className='mt-5'>
                            <DogCard index={index} dog={dog} />
                        </div>)
                })}
            </div>
        </div >)


}

export default ListDog