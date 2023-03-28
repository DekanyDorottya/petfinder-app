import './App.css';
import React, { useState, useEffect } from 'react';
import Animal from './components/Animal';

function App() {
    const [allTheAnimals, setAllTheAnimals] = useState([]);
    const [sponsoredAnimals, setSponsoredAnimals] = useState([]);

    const deleteAnimal = (id) => {
        return fetch(`/api/animal/${id}`, { method: 'DELETE' }).then((res) =>
            res.json()
        );
    };

    const handleDelete = (id) => {
        deleteAnimal(id);
        setSponsoredAnimals((sponsoredAnimals) => {
            return sponsoredAnimals.filter((animal) => animal._id !== id);
        });
    };
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
                .then((data) => console.log(data.animals));
        })
        .catch((err) => console.error(err));
    }, [])
    

// <Animal animal={animal} key={index}/>
    return (
        <div className='App'>
{/*             {allTheAnimals.map((animal, index) => (
               <Animal animal={animal} key={index}/>
               <button onChange={handleDelete(supportedANIMAL._id)}>Delete from Donate list</button>
            ))} */}
        </div>
    );
}

export default App;
