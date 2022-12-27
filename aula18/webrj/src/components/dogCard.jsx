import React from "react";

const DogCard = ({ index, dog }) => {
    return (
        <div className="flex flex-col w-full max-w-[280px] md:max-w-xs gap-4 text-gray-800 bg-amber-50 shadow-md rounded-md text-sm overflow-hidden">
            <div className="px-4 py-4 space-y-2">
                <div><span className="font-bold pr-1">#:</span>{index}</div>
                <div><span className="font-bold pr-1 ">Id:</span>{dog._id}</div>
                <div className="flex justify-between ">
                    <div><span className="font-bold pr-1">Name:</span>{dog.name}</div>
                    <div><span className="font-bold pr-1">Age:</span>{dog.age}</div>
                </div>
            </div>
            <a href={`/detailDog/${dog._id}`} className="flex items-center justify-center gap-1 bg-amber-400 py-1 font-semibold hover:bg-amber-300 hover:text-amber-100">
                More Info
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
            </a>
        </div>);
}

export default DogCard;