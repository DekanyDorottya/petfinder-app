function Header(props) {
    const setFilteredAnimals = props.setFilteredAnimals;
    const allTheAnimals = props.allTheAnimals;
    const setShowSupported = props.setShowSupported;
    const showSupported = props.showSupported;

    const setShowForm = props.setShowForm;
    const showForm = props.showForm;

    function handleType(event) {
        console.log(event.target.value);

        const filtCharacters = allTheAnimals.filter((animalObj) =>
            animalObj.type.includes(event.target.value)
        );
        setFilteredAnimals(filtCharacters);
    }

    function handleGender(event) {
        console.log(event.target.value);

        const filtCharacters = allTheAnimals.filter((animalObj) =>
            animalObj.gender.includes(event.target.value)
        );
        setFilteredAnimals(filtCharacters);
    }

    function handleShowSupportedAnimals() {
        setShowSupported(true);
    }

    function handleBackFromSupportedAnimals() {
        setShowSupported(false);
    }
    return (
        <div className='sticky'>
            <div className='header'>
                <div className='search'>
                    <select
                        id='type'
                        name='type'
                        onChange={(event) => handleType(event)}
                    >
                        <option value=''>Choose a type...</option>
                        <option value='Dog'>Dog</option>
                        <option value='Cat'>Cat</option>
                    </select>

                    <select
                        id='gender'
                        name='gender'
                        onChange={(event) => handleGender(event)}
                    >
                        <option value=''>Choose a gender...</option>
                        <option value='Female'>Female</option>
                        <option value='Male'>Male</option>
                    </select>
                </div>
                <div className='welcome'>
                    <p>Sponsor an animal!</p>
                </div>

                {showSupported ? (
                    <button
                        className='supportedBtn'
                        onClick={handleBackFromSupportedAnimals}
                    >
                        Back
                    </button>
                ) : (
                    <button
                        className='supportedBtn'
                        onClick={handleShowSupportedAnimals}
                    >
                        Show my supported animals
                    </button>
                )}
            </div>
        </div>
    );
}

export default Header;
