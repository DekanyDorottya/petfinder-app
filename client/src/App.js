import './App.css';
import React, { useState, useEffect } from 'react';
import Animal from './components/Animal';
import Header from './components/Header';
import animalsTest from './animalsTest';

function App() {
    const [allTheAnimals, setAllTheAnimals] = useState([]);
    const [filteredAnimals, setFilteredAnimals] = useState();
    const [showAnimal, setShowAnimal] = useState(true);
    const [showSupported, setShowSupported] = useState(false);
    const [render, setRender] = useState(false);
    const [mySupportedAnimals, setMySupportedAnimals] = useState([]);

    let key = 'Qnf0v9mZMNiNvet4d91zGjYvvE7NsOnMuBI7V7DZTRFowW4yFE';
    let secret = 'DQUXkBubeEbnfTcbpAElINe0l90GYKDcqMEfxFJw';
    let token;

     useEffect(() => {
        setAllTheAnimals(animalsTest);
    }); 


     useEffect(() => {
        fetch('http://localhost:5000/api/animal')
            .then((promise) => promise.json())
            .then((animals) => {
                setMySupportedAnimals(animals);
            });
            setRender(false)
    }, [render]);
     
    /*useEffect(() => {
        fetch('https://api.petfinder.com/v2/oauth2/token', {
            method: 'POST',
            body:
                'grant_type=client_credentials&client_id=' +
                key +
                '&client_secret=' +
                secret,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
        })
            .then((res) => res.json())
            .then((data) => {
                token = data.access_token;
                
            })
            .then(() => {
                fetch(
                    `https://api.petfinder.com/v2/animals?type=dog&location=90210`,
                    {
                        method: 'GET',
                        mode: 'cors',
                        headers: {
                            'Content-Type': 'application/json',
                            Authorization: 'Bearer ' + token,
                        },
                    }
                )
                    .then((res) => res.json())
                    .then((data) => setAllTheAnimals(data.animals));
            })
            .catch((err) => console.error(err));
    }, []); */




    function handleSubmit(event) {
        event.preventDefault();

        const donateAmount = event.target[0].value;
        const obj = {donateAmount}
        console.log(obj);

        const animalId = event.target.className;
        console.log(animalId);

        fetch(`http://localhost:5000/support/update/${animalId}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(obj),
        })
            .then((response) => response.json())
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
            });

    }

    return (
        <div className='App'>
            <Header
                setShowSupported={setShowSupported}
                showSupported={showSupported}
                key={0}
                setFilteredAnimals={setFilteredAnimals}
                allTheAnimals={allTheAnimals}
            />

            {!filteredAnimals &&
                !showSupported &&
                allTheAnimals.map((animal, index) => (
                    <Animal animal={animal}
                    key={index}
                    mySupportedAnimals={mySupportedAnimals}
                    setMySupportedAnimals={setMySupportedAnimals}
                    setRender={setRender} />
                ))}

            {filteredAnimals &&
                !showSupported &&
                filteredAnimals.map((animal, index) => (
                    <Animal animal={animal}
                    key={index}
                    mySupportedAnimals={mySupportedAnimals}
                    setMySupportedAnimals={setMySupportedAnimals} 
                    setRender={setRender} />
                ))}

            {showSupported &&
                mySupportedAnimals.map((animal, index) => (
                    <>
                        <Animal animal={animal.details} 
                            key={index}
                            mySupportedAnimals={mySupportedAnimals}
                            setMySupportedAnimals={setMySupportedAnimals}
                            setRender={setRender} />
                        <form className={animal._id} onSubmit={(event) => handleSubmit(event)}>
                            <label>
                                <input type='text' />
                            </label>
                            <input type='submit' value='Donate' />
                        </form>
                    </>
                ))}
        </div>
    );
}

export default App;
