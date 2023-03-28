import './App.css';
import React, { useState, useEffect } from 'react';
import Animal from './components/Animal';
import Header from './components/Header';
import SupportedAnimals from './components/SupportedAnimals';

function App() {
    const [allTheAnimals, setAllTheAnimals] = useState([]);
    const [filteredAnimals, setFilteredAnimals] = useState();
    const [showAnimal, setShowAnimal] = useState(true)
    const [showSupported, setShowSupported] = useState(false)

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
                    .then((data) => setAllTheAnimals(data.animals));
                //.then((data) => console.log(data.animals))
            })
            .catch((err) => console.error(err));
    }, []);

    // <Animal animal={animal} key={index}/>
    return (
        <div className='App'>
            <Header
                key={0}
                setFilteredAnimals={setFilteredAnimals}
                allTheAnimals={allTheAnimals}
            />
            <button onClick={() => {setShowAnimal(false); setShowSupported(true)}}>Show my supported animals</button>

            {!filteredAnimals && 
                showAnimal && 
                allTheAnimals.map((animal, index) => (
               <Animal animal={animal} key={index}/>
            ))}
           {showSupported && <SupportedAnimals setShowAnimal={setShowAnimal} setShowSupported={setShowSupported}/>}
           <button onChange={handleDelete(supportedANIMAL._id)}>Delete from Donate list</button>
           {filteredAnimals && 
                showAnimal && 
                filteredAnimals.map((animal, index) => (
               <Animal animal={animal} key={index}/>
            ))}
{/*            {filteredAnimals && showSupported && <SupportedAnimals setShowAnimal={setShowAnimal} setShowSupported={setShowSupported}/>}

            {filteredAnimals
                ? filteredAnimals.map((animal, index) => (
                      <Animal animal={animal} key={index} />
                  ))
                : allTheAnimals.map((animal, index) => (
                      <Animal animal={animal} key={index} />
                  ))} */}
        </div>
    );

}

export default App;
