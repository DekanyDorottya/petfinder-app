import React from 'react';

export default function Animal({ animal }) {
    return (
        <div>
            <div>{animal.name}</div>
            <div>{animal.breeds.primary}</div>
            <img src={animal.photos.length !== 0 ?
                animal.photos[0].small :
                "https://thumbs.dreamstime.com/b/no-image-available-icon-photo-camera-flat-vector-illustration-132483141.jpg"} 
                alt="dog"
                width="150" />
                <button>Support</button>
        </div>
    );
}
