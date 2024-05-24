import { useNavigate } from "react-router-dom";
import React from "react";
import { useState } from "react";
import { createPlayer } from "../API";

const APIURL = 'https://fsa-puppy-bowl.herokuapp.com/api/2109-UNF-HY-WEB-PT/'

export default function playerForm(){

const [formData, setFormData] = useState({
    name: '',
    breed: '',
    imageUrl: '',
});

const navigate = useNavigate();

const {name, breed, imageUrl} = formData;

function handleOnChange(event){
    setFormData((prevState)=>({
        ...prevState,
        [event.target.name]: event.target.value,
    }))
}

async function handleSubmit(event){
    event.preventDefault();
    const result = await createPlayer(formData);
    if (result.success){
        navigate('/');
    }
}

    return( <>
        <div className = "flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
       
    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
    <h2 className="block text-xl font-lg leading-6 text-gray-900 font-bold text-center">Create Player</h2>
        <form onSubmit={handleSubmit}>
        <div>
              <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                Player Name
              </label>
            <div className="mt-2">
            <input 
                id="name"
                name="name"
                type="text"
                value = {name}
                onChange={handleOnChange} 
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            </div>
            </div>
            <div>
              <label htmlFor="breed" className="block text-sm font-medium leading-6 text-gray-900">
                Player Breed
              </label>
            <div className="mt-2">
            <input 
                id="breed"
                name="breed"
                type="text"
                value = {breed}
                onChange={handleOnChange} 
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            </div>
            </div>
            <div>
              <label htmlFor="imagelurl" className="block text-sm font-medium leading-6 text-gray-900">
                Insert Image Link
              </label>
            <div className="mt-2"> 
            <input 
                id="imageUrl"
                name="imageUrl"
                type="text"
                value = {imageUrl}
                onChange={handleOnChange} 
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"/>
            </div>
            </div>
            <div className="mt-2">
            <button 
                className ="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" 
                type="submit"
                >Submit</button>
                </div>
        </form>
        </div>
        </div>
        </>
    )
}
