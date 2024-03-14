import React from "react"
import { useParams } from "react-router-dom"

export default function User(){
    const {id} = useParams();
    return (
        <div className="p-4 mx-5 bg-gray-600 text-white text-pretty text-center "> 
            User : {id}
        </div>
    )
}