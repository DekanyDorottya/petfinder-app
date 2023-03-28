import React from 'react';

export default function Animal({
    animal,
    mySupportedAnimals,
    setMySupportedAnimals,
    showSupported
}) {
    function handleSupport(e) {
        e.preventDefault();
        const data = { details: animal, donate: 0 };

        fetch('http://localhost:5000/api/animal', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then((response) => response.json())
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
            });
        console.log(data);
    }

    function handleDelete(event) {
        console.log('this needs to be deleted');
        console.log(event.target.parentElement.className);

        mySupportedAnimals.forEach(async function (supportedAnimal) {
            console.log(supportedAnimal.details.name);
            if (
                supportedAnimal.details.name ===
                event.target.parentElement.className
            ) {
                const data = await fetch(
                    'http://localhost:5000/support/delete/' +
                        supportedAnimal._id,
                    { method: 'DELETE' }
                ).then((res) => res.json());
                setMySupportedAnimals((mySupportedAnimals) =>
                    mySupportedAnimals.filter(
                        (mySupportedAnimal) =>
                            mySupportedAnimal._id !== data.result._id
                    )
                );
            }
        });
    }

    function handleSubmit(event) {
        event.preventDefault();
        
        console.log(event.target.value);
        console.log('donate');
    }

    return (
        <div className='card'>
            <div className={animal.name}>
                <div>{animal.name}</div>
                <div>{animal.type}</div>
                <div>{animal.gender}</div>
                <div>{animal.breeds.primary}</div>
                <img
                    src={
                        animal.photos.length !== 0
                            ? animal.photos[0].small
                            : 'https://thumbs.dreamstime.com/b/no-image-available-icon-photo-camera-flat-vector-illustration-132483141.jpg'
                    }
                    alt='dog'
                    width='150'
                />
                <br></br>
                <button onClick={handleSupport}>Support</button>
                <br></br>
                <button onClick={(event) => handleDelete(event)}>Delete</button>
                <br></br>
                {showSupported && (
                    <form onSubmit={(event) => handleSubmit(event)}>
                        <label>
                            <input type='text' />
                        </label>
                        <br></br>
                        <input
                            className='submitBtn'
                            type='submit'
                            value='Donate'
                        />
                    </form>
                )}
            </div>
        </div>
    );
}
