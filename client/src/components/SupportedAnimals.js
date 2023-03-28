import React from 'react';
import { useEffect, useState } from 'react';

function SupportedAnimals(props) {
    const mySupportedAnimals = props.mySupportedAnimals;
    const setMySupportedAnimals = props.setMySupportedAnimals;

    useEffect(() => {
        fetch('http://localhost:5000/api/animal')
            .then((promise) => promise.json())
            .then((animals) => {
                setMySupportedAnimals(animals);
            });
    }, [mySupportedAnimals]);

    function handleSubmit(event) {
        console.log(event.target.value);
        console.log('donate');
    }

    return (
        <>
            <div>

                {mySupportedAnimals.map((mySupportedAnimal) => (
                    <>
                        <div>{mySupportedAnimal.details.name}</div>
                        <div>{mySupportedAnimal.details.breeds.primary}</div>
                        <img
                            src={
                                mySupportedAnimal.details.photos.length !== 0
                                    ? mySupportedAnimal.details.photos[0].small
                                    : 'https://thumbs.dreamstime.com/b/no-image-available-icon-photo-camera-flat-vector-illustration-132483141.jpg'
                            }
                            alt='dog'
                            width='150'
                        ></img>

                        <form onSubmit={(event) => handleSubmit(event)}>
                            <label>
                                <input type='text' />
                            </label>
                            <input type='submit' value='Donate' />
                        </form>
                    </>
                ))}
            </div>
        </>
    );
}
export default SupportedAnimals;
