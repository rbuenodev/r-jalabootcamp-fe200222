import React, { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import { getAllDogs } from '../services/dogService'

const DetailDog = () => {

    const { id } = useParams();
    const [dog, setDog] = useState();

    const initialize = async () => {
        try {
            const result = await getAllDogs();
            const filteredResult = result.filter((f) => { return f._id === id }).at(0);
            console.log(filteredResult);
            if (filteredResult !== undefined)
                setDog(filteredResult);
        } catch (error) {
            alert(error)
        }
    }

    useEffect(() => {
        initialize()
    }, [])

    return (dog &&
        <div className=" mt-4">
            <a href="/list" className="flex justify-center items-center max-w-min px-6 py-2 bg-amber-400 hover:bg-amber-300 hover:text-amber-100 rounded"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
            </a>
            <div className="w-full flex items-center justify-center">
                <div className="mt-4 flex flex-col w-full max-w-xs gap-4 text-gray-800 bg-amber-50 shadow-md rounded-md text-sm overflow-hidden">
                    <div className="px-4 py-4 space-y-2">
                        <div><span className="font-bold pr-1 ">Id:</span>{dog._id}</div>
                        <div className="flex justify-between ">
                            <div><span className="font-bold pr-1">Name:</span>{dog.name}</div>
                            <div><span className="font-bold pr-1">Age:</span>{dog.age}</div>
                        </div>
                        <div className="flex justify-between ">
                            <div><span className="font-bold pr-1">Breed:</span>{dog.breed}</div>
                            <div><span className="font-bold pr-1">Transaction:</span>{dog.transaction}</div>
                        </div>
                    </div>
                    <div className="flex items-center justify-center bg-amber-100 h-48 mx-2 mb-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DetailDog;