import './App.css';
import React, { useState, useEffect } from 'react';
import Animal from './components/Animal';

function App() {
    const [allTheAnimals, setAllTheAnimals] = useState([]);

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
            <button>Show my supported animals</button>
            {allTheAnimals.map((animal, index) => (
                console.log(animal),
               <Animal animal={animal} key={index}/>
            ))}
        </div>
    );
}

export default App;
