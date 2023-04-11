import './App.css';
import React, { useState, useEffect } from 'react';
import Animal from './components/Animal';
import Header from './components/Header';
import Description from './components/Description';
import SuccessStory from './components/SuccessStory';
import StorySlider from './components/StorySlider';
import animalsTest from './animalsTest';
import Pagination from './components/Pagination';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

//import animalsTest from './animalsTest';

function App() {
    const [allTheAnimals, setAllTheAnimals] = useState([]);
    const [filteredAnimals, setFilteredAnimals] = useState();
    //const [showAnimal, setShowAnimal] = useState(true);
    const [showSupported, setShowSupported] = useState(false);
    const [render, setRender] = useState(false);
    const [mySupportedAnimals, setMySupportedAnimals] = useState([]);
    const [donatedAmount, setdonatedAmount] = useState(null);


    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage, setPostsPerPage] = useState(10);

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
        setRender(false);
    }, [render]);

    /* useEffect(() => {
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
                    `https://api.petfinder.com/v2/animals?type=dog&limit=100`,
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
                    .then((data) => setAllTheAnimals(data.animals) );
            })
            .catch((err) => console.error(err));
            console.log(allTheAnimals);
    }, []); */

    function handleSubmit(event) {
        event.preventDefault();

        const donateAmount = event.target[0].value;
        const obj = { donateAmount };
        console.log(obj);
       
        console.log(donateAmount);

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
            setdonatedAmount(obj)
    }

    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = allTheAnimals.slice(indexOfFirstPost, indexOfLastPost);

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
                {!filteredAnimals && !showSupported && <Description />}

                {!filteredAnimals &&
                    !showSupported &&
                    currentPosts.map((animal, index) => (
                        <div className='card'>
                            <Animal
                                animal={animal}
                                key={index}
                                mySupportedAnimals={mySupportedAnimals}
                                setMySupportedAnimals={setMySupportedAnimals}
                                setRender={setRender}
                            />
                        </div>
                    ))}

                {filteredAnimals &&
                    !showSupported &&
                    filteredAnimals.map((animal, index) => (
                        <div className='card'>
                            <Animal
                                animal={animal}
                                key={index}
                                mySupportedAnimals={mySupportedAnimals}
                                setMySupportedAnimals={setMySupportedAnimals}
                                setRender={setRender}
                            />
                        </div>
                    ))}

                {showSupported &&
                    mySupportedAnimals.map((animal, index) => (
                        <div className='card'>
                            <Animal
                                animal={animal.details}
                                key={index}
                                mySupportedAnimals={mySupportedAnimals}
                                setMySupportedAnimals={setMySupportedAnimals}
                                setRender={setRender}
                                showSupported={showSupported}
                            />
                            <form
                                className={animal._id}
                                onSubmit={(event) => {handleSubmit(event);  
                                    toast(`${animal.details.name} appreciates it!`, {
                                        position: 'bottom-right',
                                        autoClose: 5000,
                                        hideProgressBar: true,
                                        closeOnClick: true,
                                        pauseOnHover: true,
                                        draggable: true,
                                        progress: undefined,
                                        theme: 'light',
                                    })
                                }}
                            >
                                <label>
                                    <input className='donateInput' type='text' />
                                </label>
                                <br></br>
                                <input
                                    type='submit'
                                    value='Donate'
                                    className='submitBtn'
                                />
                            </form>
                        </div>
                    ))}
            </div>

            <Pagination 
                totalPosts={allTheAnimals.length}
                postsPerPage={postsPerPage}
                setCurrentPage={setCurrentPage}
                currentPage={currentPage}
            />

            {!filteredAnimals && !showSupported && <SuccessStory />}
        </div>
    );
}

export default App;
