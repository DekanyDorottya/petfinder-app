import './App.css';
import React, { useState, useEffect } from 'react';
import Animal from './components/Animal';
import Header from './components/Header';

function App() {
    const [allTheAnimals, setAllTheAnimals] = useState([]);
    const [filteredAnimals, setFilteredAnimals] = useState();
    const [showSupported, setShowSupported] = useState(false);
    const [mySupportedAnimals, setMySupportedAnimals] = useState([]);

    let key = 'Qnf0v9mZMNiNvet4d91zGjYvvE7NsOnMuBI7V7DZTRFowW4yFE';
    let secret = 'DQUXkBubeEbnfTcbpAElINe0l90GYKDcqMEfxFJw';
    let token;

    /*  useEffect(() => {
        setAllTheAnimals(animalsTest);
    }); */

/*     useEffect(() => {
        fetch('http://localhost:5000/api/animal')
            .then((promise) => promise.json())
            .then((animals) => {
                setMySupportedAnimals(animals);
            });
    }, [mySupportedAnimals]); */


    useEffect(() => {
        const fetchData = async () => {
            const data = await fetch('http://localhost:5000/api/animal');
            const json = await data.json();
            setMySupportedAnimals(json);
        };
        fetchData().catch(console.error);
    }, [mySupportedAnimals]);

    useEffect(() => {
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
                // use token to fetch animals
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
    }, []);

    return (
        <div className='App'>
            <Header
                setShowSupported={setShowSupported}
                showSupported={showSupported}
                key={0}
                setFilteredAnimals={setFilteredAnimals}
                allTheAnimals={allTheAnimals}
            />

            <div className='main'>
                {!filteredAnimals &&
                    !showSupported &&
                    allTheAnimals.map((animal, index) => (
                        <Animal
                            animal={animal}
                            key={index}
                            mySupportedAnimals={mySupportedAnimals}
                            setMySupportedAnimals={setMySupportedAnimals}
                            showSupported={showSupported}
                        />
                    ))}

                {filteredAnimals &&
                    !showSupported &&
                    filteredAnimals.map((animal, index) => (
                        <Animal
                            animal={animal}
                            key={index}
                            mySupportedAnimals={mySupportedAnimals}
                            setMySupportedAnimals={setMySupportedAnimals}
                            showSupported={showSupported}
                        />
                    ))}

                {showSupported &&
                    mySupportedAnimals.map((animal, index) => (
                        <>
                            <Animal
                                animal={animal.details}
                                key={index}
                                mySupportedAnimals={mySupportedAnimals}
                                setMySupportedAnimals={setMySupportedAnimals}
                                showSupported={showSupported}
                            />
                        </>
                    ))}
            </div>
        </div>
    );
}

export default App;
