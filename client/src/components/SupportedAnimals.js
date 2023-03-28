import React from 'react';
import { useEffect, useState } from 'react';

function SupportedAnimals(props){

    const mySupportedAnimals = props.mySupportedAnimals;
    const setMySupportedAnimals = props.setMySupportedAnimals;

    

    useEffect(() => {
        fetch('http://localhost:5000/api/animal')
            .then(promise => promise.json())
            .then(animals => {
                setMySupportedAnimals(animals)
                
                

            })
        },[mySupportedAnimals])
        
        return(<>
        <div>
        <button onClick={() => {props.setShowSupported(false); props.setShowAnimal(true)}}>Back</button>
        {mySupportedAnimals.map((mySupportedAnimal) => (
        <>
        <div>{mySupportedAnimal.details.name}</div>
        <div>{mySupportedAnimal.details.breeds.primary}</div>
        <img src={mySupportedAnimal.details.photos.length !== 0 ?
                mySupportedAnimal.details.photos[0].small :
                "https://thumbs.dreamstime.com/b/no-image-available-icon-photo-camera-flat-vector-illustration-132483141.jpg"}
                alt="dog"
                width="150"></img>
        </>
        ))}

        </div>
        </>
         
    )


}
export default SupportedAnimals