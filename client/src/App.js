import './App.css';
import React, { useState, useEffect } from 'react';
import Animal from './components/Animal';
import SupportedAnimals from './components/SupportedAnimals';

function App() {
    const [allTheAnimals, setAllTheAnimals] = useState([]);
    const [showAnimal, setShowAnimal] = useState(true)
    const [showSupported, setShowSupported] = useState(false)

    // env file-ba is rakhatjuk
    let key = 'Qnf0v9mZMNiNvet4d91zGjYvvE7NsOnMuBI7V7DZTRFowW4yFE';
    let secret = 'DQUXkBubeEbnfTcbpAElINe0l90GYKDcqMEfxFJw';
    let token;

    // get authorization token
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
            console.log(data.access_token);
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
                .then((data) => {console.log(data); setAllTheAnimals(data.animals) } );

        })
        .catch((err) => console.error(err));
    }, [])
    

    return (
        <div className='App'>
            <button onClick={() => {setShowAnimal(false); setShowSupported(true)}}>Show my supported animals</button>
            {showAnimal && allTheAnimals.map((animal, index) => (
               <Animal animal={animal} key={index}/>
            ))}
           {showSupported && <SupportedAnimals setShowAnimal={setShowAnimal} setShowSupported={setShowSupported}/>}
        </div>
    );
}

export default App;
