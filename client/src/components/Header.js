function Header(props) {

    const setFilteredAnimals = props.setFilteredAnimals;
    const allTheAnimals = props.allTheAnimals;

    function handleType(event) {
        console.log(event.target.value);

        const filtCharacters = allTheAnimals.filter((animalObj) =>
        animalObj.type
            //.toLowerCase()
            .includes(event.target.value/* .toLowerCase() */)
    );
    setFilteredAnimals(filtCharacters);

    }

    function handleGender(event) {
        console.log(event.target.value);

        const filtCharacters = allTheAnimals.filter((animalObj) =>
        animalObj.gender
            //.toLowerCase()
            .includes(event.target.value/* .toLowerCase() */)
    );
    setFilteredAnimals(filtCharacters);
    }

    return (
        <div className='sticky'>
            <div className='header'>
                <div className='search'>

                    <select id="type" name="type" onChange={(event) => handleType(event)}>
                    <option value="">Choose a type...</option>
                    <option value="Dog">Dog</option>
                    <option value="Cat">Cat</option>
                    </select>

                    <select id="gender" name="gender" onChange={(event) => handleGender(event)}>
                    <option value="">Choose a gender...</option>
                    <option value="Female">Female</option>
                    <option value="Male">Male</option>
                    </select>

                </div>
                <div className='welcome'>
                    <p>Sponsor an animal!</p>
                </div>
                <div className='sponsoredBtn'>
                    <button>
                        Sponsored animals
                    </button>
                </div>
            </div>
        </div>
    );
    
}

export default Header;